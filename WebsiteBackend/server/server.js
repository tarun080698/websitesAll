// Copyright IBM Corp. 2016,2019. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');

const app = (module.exports = loopback());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});

console.log(Object.keys(app.models));

app.models.User.afterRemote('create', (ctx, user, next) => {
  console.log('new user is', user);
  app.models.Profile.create(
    {
      firstname: user.username,
      lastname: user.email,
      created_at: new Date(),
      userId: user.id,
      dob: new Date(),
    },
    (error, result) => {
      if (!error && result) {
        console.log('\n Created new user profile!', result);
      } else {
        console.log('Something went wrong.', error);
      }
    }
  );
  next();
});

app.models.Role.find({where: {name: 'admin'}}, (err, role) => {
  if (!err && role) {
    console.log('existing role is', role);
    if (role.length === 0) {
      app.models.Role.create(
        {
          name: 'admin',
        },
        (err2, created) => {
          if (!err2 && created) {
            console.log('Admin role created?', created);
            app.models.User.findOne((uerr, user) => {
              console.log('user found to assign is ', user);
              console.log('error is ', uerr);
              if (!uerr && user) {
                console.log('assigned role to ', user);
                created.principals.create(
                  {
                    principalType: app.models.RoleMapping.USER,
                    principalId: user.id,
                  },
                  (perr, pdone) => {
                    console.log('created principal? ', perr, pdone);
                  }
                );
              }
            });
          }
        }
      );
    }
  } else console.log('error is ', err);
});

app.models.Role.find({where: {name: 'editor'}}, (err, role) => {
  if (!err && role) {
    console.log('existing role is', role);
    if (role.length === 0) {
      app.models.Role.create(
        {
          name: 'editor',
        },
        (createErr, created) => {
          console.log('editor role created? ', createErr, created);
        }
      );
    }
  }
});

// app.models.Role.count((err, counted) => {
//   console.log('total is', err, counted);
// });

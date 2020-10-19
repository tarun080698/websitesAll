import React, { Component } from 'react';
import Field from '../CommonComp/Fields';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = [
  {
    name: 'email',
    elementName: 'input',
    type: 'email',
    placeholder: 'Your email',
  },
  {
    name: 'password',
    elementName: 'input',
    type: 'password',
    placeholder: 'Your password',
  },
];

class Login extends Component {
  render() {
    return (
      <div className='login-page'>
        <div className='container'>
          <div className='login-form'>
            <div className='row'>
              <h1>Login to admin Panel</h1>
            </div>
            <div className='row'>
              <form className='form-page' onSubmit={this.props.handleSubmit}>
                {fields.map((field, index) => {
                  return (
                    <div className='col-md-12' key={index}>
                      <Field
                        key={index}
                        {...field}
                        values={this.props.values[field.name]}
                        name={field.name}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        touched={this.props.touched[field.name]}
                        errors={this.props.errors[field.name]}
                      />
                    </div>
                  );
                })}
                <div className='col-md-12'>
                  <button className='btn -btn-primary green' type='submit'>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().required('Login with correct email.'),
    password: Yup.string().required('Please enter correct password.'),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    console.log('login attempt', values);
  },
})(Login);

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

// wrappers
import AdminWrapper from "../src/Components/Wrapper/AdminWrapper";
import LoginWrapper from "../src/Components/Wrapper/LoginWrapper";

//  pages
import Home from "../src/Components/Pages/Home";
import About from "../src/Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Portfolio from "./Components/CommonComp/Portfolio";
import Services from "./Components/CommonComp/Services";
import Team from "./Components/CommonComp/Team";

// admin Panel
import Login from "./Components/Pages/Login";
import Dashboard from "../src/Components/Pages/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route
            path="/admin"
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Dashboard />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />
          <Route
            path="/"
            exact={true}
            render={(props) => (
               
                <Home />
               
            )}
          />
          <Route
            path="/services"
            render={(props) => (
               
                <Services {...props} />
               
            )}
          />
          <Route
            path="/about"
            render={(props) => (
               
              <About {...props} />
               
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              
                <Contact {...props} />
              
            )}
          />
          <Route
            path="/portfolio"
            render={(props) => (
              
                <Portfolio {...props} />
              
            )}
          />

          <Route
            path="/team"
            render={(props) => (
              
                <Team {...props} />
              
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

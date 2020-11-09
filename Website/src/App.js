import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

// wrappers
import PageWrapper from "../src/Components/PageWrapper";
import AdminWrapper from "../src/Components/AdminWrapper";
import LoginWrapper from "../src/Components/LoginWrapper";

// pages
import Home from "../src/Components/Pages/Home";
import About from "../src/Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Portfolio from "./Components/CommonComp/Portfolio";
import Services from "./Components/CommonComp/Services";
import Team from "./Components/CommonComp/Team";

//admin Panel
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
              <PageWrapper>
                <Home {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/services"
            render={(props) => (
              <PageWrapper>
                <Services {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <PageWrapper>
                <About {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <PageWrapper>
                <Contact {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/portfolio"
            render={(props) => (
              <PageWrapper>
                <Portfolio {...props} />
              </PageWrapper>
            )}
          />

          <Route
            path="/team"
            render={(props) => (
              <PageWrapper>
                <Team {...props} />
              </PageWrapper>
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

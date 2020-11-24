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
import SingleBlog from "./Components/Pages/SingleBlog";
import Blog from "./Components/Pages/Blog";
import Portfolio from "./Components/CommonComp/Portfolio";
import Services from "./Components/CommonComp/Services";
import Team from "./Components/CommonComp/Team";

//admin Panel
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Pages/Admin/Dashboard";
import Posts from "./Components/Pages/Admin/Posts";
import AddPost from "./Components/Pages/Admin/AddPost";
import Users from "./Components/Pages/Admin/Users";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route
            exact={true}
            path="/admin/users"
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Users />
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
            exact={true}
            path="/admin/posts/:view/:id"
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <AddPost />
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
            exact={true}
            path="/admin/posts/:view"
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <AddPost />
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
            exact={true}
            path="/admin/posts"
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Posts />
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
            exact={true}
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


          {/* <Route
            exact={true}
            path="/login"
            render={(props) => {
              return (
                <div>
                  {!this.props.auth.token &&
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>}
                  </div>
              );
            }}
          /> */}
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
            exact={true}
            render={(props) => (
              <PageWrapper>
                <Services {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/about"
            exact={true}
            render={(props) => (
              <PageWrapper>
                <About {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/contact"
            exact={true}
            render={(props) => (
              <PageWrapper>
                <Contact {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/portfolio"
            exact={true}
            render={(props) => (
              <PageWrapper>
                <Portfolio {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/blog"
            exact={true}
            render={(props) => (
              <PageWrapper>
                <Blog {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/blog:slug"
            exact={true}
            render={(props) => (
              <PageWrapper>
                <SingleBlog {...props} />
              </PageWrapper>
            )}
          />

          <Route
            path="/team"
            exact={true}
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

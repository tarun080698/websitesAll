import React, { Component } from "react";
import { connect } from "react-redux";
import Field from "../CommonComp/Fields";
import { withFormik } from "formik";
import * as Yup from "yup";
import * as authActions from "../store/actions/authActions";
// import { FormikTextField, FormikSelectField } from "formik-material-fields";

const fields = [
  {
    name: "email",
    elementName: "input",
    type: "email",
    placeholder: "Your email",
  },
  {
    name: "password",
    elementName: "input",
    type: "password",
    placeholder: "Your password",
  },
];

class Login extends Component {
  state = {
    show: 'none'
  }
  render() {
    return (
      <div className="login-page">
        <div className="container">
          <div className="login-form">
            <div className="row">
              <h1>Login to admin Panel</h1>
            </div>
            <div className="row">
              <form
                className="form-page"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (
                    this.props.values.email.trim() !== "" &&
                    this.props.values.password.trim() !== ""
                  ) {
                    this.setState({show: 'inline-block'})
                    this.props.login(
                      this.props.values.email,
                      this.props.values.password
                    );
                  }
                }}
              >
                {fields.map((field, index) => {
                  return (
                    <div className="col-md-12" key={index}>
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
                <div className="col-md-12">
                  {
                    this.props.values.email.trim() !== "" &&
                    this.props.values.password.trim() !== ""
                    && <button className="btn-login" type="submit">
                    Login
                  </button>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => {
    dispatch(authActions.login(email, password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: () => ({
      email: "",
      password: "",
    }),

    validationSchema: Yup.object().shape({
      email: Yup.string().required("Login with correct email."),
      password: Yup.string().required("Please enter correct password."),
    }),

    handleSubmit: (values, { setSubmitting }, login) => {
      console.log("login attempt", values);
      login(values.email, values.password);
    },
  })(Login)
);

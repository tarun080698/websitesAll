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
    name: "name",
    elementName: "input",
    type: "text",
    placeholder: "Your name",
  },
  {
    name: "password",
    elementName: "input",
    type: "password",
    placeholder: "Your password",
  },
  {
    name: "cpassword",
    elementName: "input",
    type: "password",
    placeholder: "confirm password",
  },
];

class SignUp extends Component {
  state = {
    show: "none",
  };
  render() {
    return (
      <div className="login-page">
        <div className="container">
          <div className="login-form">
            <center>
              <div className="row" style={{ display: "contents" }}>
                <h1>Sign Up Panel</h1>
              </div>
              <div className="form-page" style={{ display: "contents" }}>
                <form
                  className="row"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (
                      this.props.values.email.trim() !== "" &&
                      this.props.values.name.trim() !== "" &&
                      this.props.values.password.trim() !== "" &&
                      this.props.values.cpassword.trim() !== ""
                    ) {
                      this.props.register(
                        this.props.values.name,
                        this.props.values.email,
                        this.props.values.password
                      );
                    }
                  }}
                >
                  {fields.map((field, index) => {
                    return (
                      <div className="col-md-6" key={index}>
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
                    <p className="text-danger muted ">
                      {this.props.values.password.length < 6 ||
                      this.props.values.cpassword.length < 6
                        ? "*Password should contain atleast 6 character"
                        : this.props.values.password !==
                          this.props.values.cpassword
                        ? "*Passwords does not match!"
                        : this.props.values.email.trim() !== "" &&
                          this.props.values.name.trim() !== "" &&
                          this.props.values.cpassword.trim() !== "" &&
                          this.props.values.password.trim() !== "" && (
                            <div>
                              <p className="text-danger muted">
                                {this.props.auth.error || ""}
                              </p>
                              <button className="btn-login" type="submit">
                                Sign up
                              </button>
                            </div>
                          )}
                    </p>
                  </div>
                </form>
              </div>
            </center>
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
  register: (email, name, password) => {
    dispatch(authActions.register(email, name, password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: () => ({
      email: "",
      name: "",
      password: "",
      cpassword: "",
    }),

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invaild email.")
        .required("enter your email address."),
      name: Yup.string().required("enter your name."),
      password: Yup.string()
        .min(6, "min. 6 characters required.")
        .required("Please enter correct password."),
      cpassword: Yup.string()
        .min(6, "min. 6 characters required.")
        .required("password and confirm password must be same.")
        // .test("passwords", "both passowrds should be same.", (value) => {
        //   const { password } = this.parent ? this.parent : '';
        //   return password === value;
        // }),
    }),

    handleSubmit: (values, { setSubmitting }, register) => {
      console.log("signup attempt", values);
      register(values.email, values.name, values.password);
    },
  })(SignUp)
);

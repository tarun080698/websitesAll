import React, { Component } from "react";
import { connect } from "react-redux";
import * as AdminActions from "../../store/actions/adminActions";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { FormikTextField, FormikSelectField } from "formik-material-fields";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import saveIcon from "@material-ui/icons/Save";
import { withRouter } from "react-router-dom";

const styles = (theme) => ({
  container: {
    margin: theme.spacing.unit * 3,
    display: "flex",
    flexDirection: "row wrap",
    widtg: "100%",
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  leftSide: {
    flex: 4,
    height: "100%",
    margin: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 3,
  },
  rightSide: {
    flex: 1,
    height: "100%",
    margin: theme.spacing.unit * 1,
    padding: theme.spacing.unit * 3,
  },
});

class AddPost extends Component {
  componentDidUpdate(props, state) {
    if (
      this.props.match.params.view === "add" &&
      this.props.admin.posts.filter(
        (post) => post.title === this.props.values.title
      ).length > 0
    ) {
      const post = this.props.admin.posts.filter(
        (post) => post.title === this.props.values.title
      )[0];
      this.props.history.push("/admin/posts/edit" + post.dispatch);
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Form autoComplete="off" className={classes.container}>
          <Paper className={classes.leftSide} elevation={10}>
            left
            <FormikTextField
              name="title"
              label="Title"
              margin="normal"
              onChange={(e) =>
                this.props.setFieldValue(
                  "slug",
                  e.target.value.toLowerCase().replace(/ /g, "-")
                )
              }
              fullWidth
            />
            <FormikTextField
              name="slug"
              label="Slug"
              margin="normal"
              fullWidth
            />
            <FormikTextField
              name="content"
              label="Content"
              margin="normal"
              fullWidth
            />
          </Paper>
          <Paper className={classes.rightSide} elevation={10}>
            right
            <FormikSelectField
              label="Status"
              name="status"
              margin="normal"
              fullWidth
              options={[
                { label: "Unpublished", value: false },
                { label: "Published", value: true },
              ]}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.handleSubmit}
            >
              <saveIcon /> Save
            </Button>
          </Paper>
        </Form>
      </div>
    );
  }
}

// document.write(today);

const mapStateToProps = (state) => ({
  auth: state.auth,
  admin: state.admin,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post, token) => {
    dispatch(AdminActions.addPost(post, token));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    withFormik({
      mapPropsToValues: () => ({
        title: "",
        slug: "",
        createdAt: null,
        status: false,
        content: "",
      }),

      validationSchema: Yup.object().shape({
        title: Yup.string().required("Required"),
        slug: Yup.string().required("Required"),
        content: Yup.string().required("Required"),
      }),

      handleSubmit: (values, { setSubmitting, props }) => {
        let today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + "/" + dd + "/" + yyyy;
        values.createdAt = today;

        console.log("Posting", props.addPost);
        props.addPost(values, props.auth.token);
      },
    })(withStyles(styles)(AddPost))
  )
);

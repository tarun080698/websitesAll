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
                  e.target.value.toLowerCase().replace(/ /g, "_")
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  admin: state.admin,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post, token) => {
    dispatch(AdminActions.addPost(post, token));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: () => ({
      title: "",
      slug: "",
      createdAt: "",
      status: false,
    }),

    validationSchema: Yup.object().shape({
      title: Yup.string().required("Required"),
      slug: Yup.string().required("Required"),
      content: Yup.string().required("Required"),
    }),

    handleSubmit: (values, { setSubmitting, props }) => {
      console.log("Posting", props.addPost);
    },
  })(withStyles(styles)(AddPost))
);

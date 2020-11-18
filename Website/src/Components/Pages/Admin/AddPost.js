import React, { Component } from "react";
import { connect } from "react-redux";
import * as AdminActions from "../../store/actions/adminActions";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { FormikTextField, FormikSelectField } from "formik-material-fields";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ImageIcon from "@material-ui/icons/Image";
import { withRouter } from "react-router-dom";

const styles = (theme) => ({
  container: {
    margin: theme.spacing.unit * 3,
    display: "flex",
    flexDirection: "row wrap",
    widtg: "100%",
  },
  save: {
    marginBottom: theme.spacing.unit * 4,
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

    if (this.props.admin.post.id !== props.admin.post.id) {
      this.props.setValues(this.props.admin.post);
    }
  }

  componentDidMount() {
    if (this.props.match.params.view === "edit" && this.props.match.params.id) {
      this.props.getSinglePost(
        this.props.match.params.id,
        this.props.auth.token
      );
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Form autoComplete="off" className={classes.container}>
          <Paper
            className={classes.leftSide}
            elevation={10}
            style={{
              fontSize: "x-large",
              color: "#0e101a",
              fontWeight: "bolder",
              lineHeight: "0.5rem",
            }}
          >
            write post here
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
          <Paper
            className={classes.rightSide}
            elevation={10}
            style={{
              fontSize: "x-large",
              color: "#0e101a",
              fontWeight: "bolder",
              lineHeight: "0.5rem",
            }}
          >
            status of post
            <FormikSelectField
              label="select"
              name="status"
              margin="normal"
              fullWidth
              options={[
                { label: "Unpublished", value: false },
                { label: "Published", value: true },
              ]}
            />
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.save}
                onClick={this.props.handleSubmit}
              >
                <SaveIcon /> Save
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.save}
                // onClick={this.props.handleSubmit}
              >
                <ImageIcon /> Upload
              </Button>
              <imput type="file" style={{display: 'none'}} className="myFile"/> 
            </div>
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
  updatePost: (post, token) => {
    dispatch(AdminActions.updatePost(post, token));
  },
  getSinglePost: (id, token) => {
    dispatch(AdminActions.getSinglePost(id, token));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    withFormik({
      mapPropsToValues: (props) =>
        props.match.params.view === "edit"
          ? {
              title: props.admin.post.title || "",
              slug: props.admin.post.slug || "",
              createdAt: props.admin.post.createdAt || null,
              status: props.admin.post.status || false,
              content: props.admin.post.content || "",
            }
          : {
              title: "",
              slug: "",
              createdAt: null,
              status: false,
              content: "",
            },

      validationSchema: Yup.object().shape({
        title: Yup.string().required("Required"),
        slug: Yup.string().required("Required"),
        content: Yup.string().required("Required"),
      }),

      handleSubmit: (values, { setSubmitting, props }) => {
        let today = new Date();
        // var dd = String(today.getDate()).padStart(2, "0");
        // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        // var yyyy = today.getFullYear();
        // today = mm + "/" + dd + "/" + yyyy;
        values.createdAt = today;

        if (props.match.params.view === "edit") {
          const post = {
            ...values,
            id: props.match.params.id,
          };
          props.updatePost(post, props.auth.token);
        } else {
          console.log("Posting", props.addPost);
          props.addPost(values, props.auth.token);
        }

        values.title = "";
        values.slug = "";
        values.createdAt = null;
        values.status = false;
        values.content = "";
      },
    })(withStyles(styles)(AddPost))
  )
);

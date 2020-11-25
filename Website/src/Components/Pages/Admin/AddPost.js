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
import API from "../../../utils/api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Alert, AlertTitle } from "@material-ui/lab";

/*  global $  */
const styles = (theme) => ({
  container: {
    margin: theme.spacing(3),
    display: "flex",
    flexDirection: "row wrap",
  },
  save: {
    marginBottom: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
  },
  leftSide: {
    flex: 4,
    height: "100%",
    width: "auto",
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    color: "black",
    fontSize: "x-large",
    fontWeight: "bolder",
    lineHeight: "0.7rem",
  },

  rightSide: {
    flex: 1,
    height: "100%",
    width: "20%",
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    color: "black",
    fontSize: "x-large",
    fontWeight: "bolder",
    lineHeight: "0.7rem",
  },
  postImage: {},
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

  uploadImage = (e) => {
    let data = new FormData();
    data.append(
      "file",
      e.target.files[0],
      new Date().getTime().toString() + e.target.files[0].name
    );
    this.props.uploadImage(
      data,
      this.props.auth.token,
      this.props.admin.post.id,
      this.props.auth.user.userId
    );
    // for (var key of data.entries()) {
    //   console.log(data.file);
    //   console.log(key[0] + ", " + key[1]);
    // }
  };

  componentDidMount() {
    if (this.props.match.params.view === "edit" && this.props.match.params.id) {
      this.props.getSinglePost(
        this.props.match.params.id,
        this.props.auth.token
      );
    }
  }

  modules = {
    toolbar: [
      [{ font: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ header: 1 }, { header: 2 }],
      ["blockquote"][{ align: [] }],
      ["code"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [
        {
          size: ["Small", "Large", "Larger", "Huge"],
        },
      ],
      [{ color: [] }, { background: [] }],
      ["image"],
      ["video"],
      ["clean"],
    ],
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "script",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code",
    "code-block",
    "size"
  ];

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Form autoComplete="off" className={classes.container}>
          <Paper className={classes.leftSide} elevation={10}>
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
            <ReactQuill
              value={this.props.values.content}
              placeholder="write something cool..."
              modules={this.modules}
              formats={this.formats}
              style={{ border: "1px solid #000", minHeight: "110px" }}
              onChange={(val) => {
                this.props.setFieldValue("content", val);
              }}
            />
          </Paper>
          <Paper className={classes.rightSide} elevation={10}>
            Status
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
            Select image
            {this.props.admin.post.PostImage ? (
              this.props.admin.post.PostImage.length > 0 ? (
                <img
                  src={API.makeFileUrl(
                    this.props.admin.post.PostImage[0].url,
                    this.props.auth.token
                  )}
                  className="postImage"
                  alt="uploaded by user"
                />
              ) : null
            ) : null}
            <div>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "14px" }}
                onClick={(e) => {
                  $(".MyFile").trigger("click");
                }}
              >
                <ImageIcon /> upload
              </Button>
              <input
                type="file"
                style={{ display: "none" }}
                className="MyFile"
                onChange={(e) => this.uploadImage(e)}
              />
            </div>
          </Paper>
        </Form>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
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
  uploadImage: (data, token, postId, userId) => {
    dispatch(AdminActions.uploadImage(data, token, postId, userId));
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
              title: props.admin.post.title,
              slug: props.admin.post.slug,
              createdAt: props.admin.post.createdAt,
              status: props.admin.post.status,
              content: props.admin.post.content,
              userId: props.auth.user.userId,
            }
          : {
              title: "",
              slug: "",
              createdAt: null,
              status: false,
              content: "",
              userId: props.auth.user.userId,
            },

      validationSchema: Yup.object().shape({
        title: Yup.string().required("Required"),
        slug: Yup.string().required("Required"),
        content: Yup.string().required("Required"),
      }),

      handleSubmit: (values, { setSubmitting, props }) => {
        let today = new Date()
          .toString()
          .replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/, "$2-$1-$3");
        console.log(today);
        values.createdAt = today;

        if (props.match.params.view === "edit") {
          const post = {
            ...values,
            id: props.match.params.id,
          };
          console.log(post);
          props.updatePost(post, props.auth.token);
          alert("Post updated!");
        } else {
          console.log(values,props.auth.token);
          props.addPost(values, props.auth.token);
          alert("Post saved!");
          values.title = "";
          values.slug = "";
          values.createdAt = null;
          values.status = false;
          values.content = "";
        }
      },
    })(withStyles(styles)(AddPost))
  )
);

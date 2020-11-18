import React, { Component } from "react";
import TableView from "../../CommonComp/TableView";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import "../../../assets/css/users.css";
import { connect } from "react-redux";
import * as AdminActions from "../../store/actions/adminActions";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const columns = [
  { label: "ID", name: "id" },
  { label: "Title", name: "title" },
  { label: "Created at", name: "createdAt" },
  { label: "Slug", name: "slug" },
  // { label: "Content", name: "content" },
];

const styles = (theme) => ({
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
  },
  headpaper: {
    margin: "20px 40px",
    width: "max-content",
    padding: "0px 20px",
    fontSize: "xx-large",
  },
});

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.auth.token);
  }
  render() {
    const { classes } = this.props;
    const posts = this.props.admin.posts;
    return (
      <div>
        <Paper className={classes.headpaper} elevation={5}>
          POSTS LIST
        </Paper>
        <TableView columns={columns} rows={posts} />
        <Fab
          component={RouterLink}
          to="/admin/posts/add"
          color="primary"
          aria-label="Add"
          className={classes.fab}
        >
          <EditIcon />
        </Fab>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    admin: state.admin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (token) => {
      dispatch(AdminActions.getPosts(token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Posts));

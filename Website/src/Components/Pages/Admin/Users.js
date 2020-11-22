import React, { Component } from "react";
import TableView from "../../CommonComp/TableView";
// import Paper from "@material-ui/core/Paper";
import "../../../assets/css/users.css";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import * as AdminActions from "../../store/actions/adminActions";
import GroupIcon from "@material-ui/icons/Group";

const columns = [
  { label: "Name", name: "name" },
  { label: "Email", name: "email" },
  { label: "ID", name: "id" },
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
    fontSize: "x-large",
    color: "aliceblue",
  },
});

class Users extends Component {
  componentDidMount() {
    this.props.getUSers(this.props.auth.token);
  }
  render() {
    const { classes } = this.props;
    const users = this.props.admin.users;
    return (
      <div>
        {/* <Paper className={classes.headpaper} elevation={5}> */}
        <center>
          <p className={classes.headpaper}>
            <GroupIcon fontSize="large" />
            USERS
          </p>
        </center>
        {/* </Paper> */}
        <TableView columns={columns} rows={users} />
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
    getUSers: (token) => {
      dispatch(AdminActions.getUsers(token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Users));

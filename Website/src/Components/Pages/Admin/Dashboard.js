import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as userActions from "../../store/actions/userActions";

class Dashboard extends Component {

  componentDidMount() {
    this.props.getUserDetails(this.props.auth.user.userId, this.props.auth.token)
    // console.log(this.props.user);
  }
  render() {
    return (
      <div
        style={{
          margin: "20px",
          padding: "10px",
          backgroundColor: "aliceblue",
          color: "black",
        }}
      >
        <h1>You are logged in with token :</h1>
        <p>{this.props.auth.token}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    admin: state.admin,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUserDetails: (userId, token) => {
    dispatch(userActions.getUserDetails(userId, token));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as userActions from "../../store/actions/userActions";
import { Divider } from "@material-ui/core";

class Dashboard extends Component {

  componentDidMount() {
    // console.log(this.props.user.profile.name)
    // this.props.getUserDetails(this.props.user.user.id, this.props.auth.token)
    // console.log(this.props.user.user);
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
        
        {/* {this.props.user.profile && <><h3>Name: {this.props.user.profile.name}</h3>
        <h3>Email Address: {this.props.user.profile.email}</h3>
        <h3>Joined Speed Up on {this.props.user.profile.created_at}</h3>
          <br />
          </>
        } */}
        <Divider style={{height:4}}/>
        <h3>Your current access token: {this.props.auth.token}</h3>
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

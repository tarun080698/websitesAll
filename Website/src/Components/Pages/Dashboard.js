import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>You are logged in with token :</h1>
        <p>{this.props.auth.token}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));

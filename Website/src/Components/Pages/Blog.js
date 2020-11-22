import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link as RouterLink } from "react-router-dom";
import Header from "../CommonComp/Header";
import image from "../../assets/img/sample.jpg";
import * as SiteActions from "../store/actions/siteActions";
import BlogItem from "../CommonComp/BlogItem";

class Blog extends Component {
    componentDidMount(){
        // this.props.getPosts(0);
        // this.props.getPostCount();
    }
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Blog's Page!"
          subtitle="Read all of our stories"
          showbtn={false}
          image={image}
            />
        Blog
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    site: state.site,
  };
};

const mapDispatchToProps = (dispatch) => ({

        getPosts: (skip) => {
            dispatch(SiteActions.getPosts(skip));
        },
        getPostCount: () => {
            dispatch(SiteActions.getPostCount());
        }
  });

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Blog));

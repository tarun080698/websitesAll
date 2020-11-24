import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link as RouterLink } from "react-router-dom";
import Header from "../CommonComp/Header";
import image from "../../assets/img/wallpaper.jpeg";
import * as SiteActions from "../store/actions/siteActions";
import BlogItem from "../CommonComp/BlogItem";

class Blog extends Component {
  componentDidMount() {
    this.props.getSitePosts(0);

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
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Blogs</h2>
              <h3 className="section-subheading text-muted">
                We hope you will enjoy it.
              </h3>
            </div>
            <div className="row">
              {this.props.site.posts ? (
                this.props.site.posts.length > 0 &&
                this.props.site.posts.map((post) => {
                  return <BlogItem post={post} key={post.id} />;
                })
              ) : (
                <h3>No blogs found. Come back later in sometime.</h3>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  site: state.site,
});

const mapDispatchToProps = (dispatch) => ({
  getSitePosts: (skip) => {
    dispatch(SiteActions.getSitePosts(skip));
  },
  // getPostCount: () => {
  //   dispatch(SiteActions.getPostCount());
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Blog));

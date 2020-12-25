import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link as RouterLink } from "react-router-dom";
import Header from "../CommonComp/Header";
// import image from "../../assets/img/wallpaper.jpeg";
import imageSample from "../../assets/img/sample.jpg";

import * as SiteActions from "../store/actions/siteActions";
import BlogItem from "../CommonComp/BlogItem";

class Blog extends Component {
  componentDidMount() {
    this.props.getSitePosts(0);
    this.props.getPostsCount();
    console.log(this.props.site.postCount);
  }
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Blog's Page!"
          subtitle="Read all of our stories"
          showbtn={false}
          image={imageSample}
        />
        <section
          className="page-section "
          id="portfolio"
          style={{ backgroundColor: "#BB9E90" }}
        >
          <div className="container">
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
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  {this.props.site.postCount > this.props.site.posts.length ? (
                    <button
                      className="btn btn-default"
                      style={{    'font-size': '1.2rem',
                        color: '#fed136',
                        'font-family': '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                        'font-weight': '700',
                        'letter-spacing': '0.2625em',
                      }}
                      
                      onClick={(e) => {
                        this.props.getSitePosts(this.props.site.posts.length);
                      }}
                    >
                      load more...
                    </button>
                  ) : null}
                </div>
              </div>
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
  getPostsCount: () => {
    dispatch(SiteActions.getPostsCount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Blog));

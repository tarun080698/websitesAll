import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as SiteActions from "../store/actions/siteActions";
import { connect } from "react-redux";

import sampleImg from "../../assets/img/Net.PNG";

class BlogItem extends Component {
  render() {
    return (
      <div className="col-lg-4 col-sm-6 mb-4">
        <div
          className="portfolio-item"
          style={{
            "overflow-wrap": "anywhere",
            "max-height": "400px",
            padding: "20px",
            margin: "15px",
          }}
        >
          <Link
            className="portfolio-link"
            data-toggle="modal"
            to={`/blog/${this.props.post.slug}`}
            onClick={() => this.props.setPostData(this.props.post)}
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            {/* {this.props.post.image &&  */}
            <img
              className="img-fluid"
              // src={this.props.post.image}
              src={sampleImg}
              alt="uploaded-background-im g"
            />
            {/* } */}
          </Link>
          <div className="portfolio-caption" style={{ padding: "0.5rem" }}>
            <div className="portfolio-caption-heading">
              {this.props.post.title}
            </div>
            <div
              className="portfolio-caption-subheading text-muted"
              style={{
                "text-align": "justify",
                fontSize: "1.3rem",
                paddingBottom: 10,
              }}
            >
              {this.props.post.slug}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setPostData: (post) => {
    dispatch(SiteActions.setPostData(post));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogItem);

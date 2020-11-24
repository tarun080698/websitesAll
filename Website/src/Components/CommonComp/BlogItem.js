import React, { Component } from 'react'

import sampleImg from '../../assets/img/Net.PNG'

class BlogItem extends Component {
    render() {
        return (
                <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-toggle="modal"
                    href="#portfolioModal1"
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
                    
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{this.props.post.title}</div>
                    <div className="portfolio-caption-subheading text-muted">
                      {this.props.post.slug}
                    </div>
                  </div>
                </div>
              </div>
        )
    }
}

export default BlogItem

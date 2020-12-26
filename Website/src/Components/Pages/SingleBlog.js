import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../CommonComp/Header";
import Footer from "../CommonComp/Footer";
import * as SiteActions from "../store/actions/siteActions";
import { Link } from "react-router-dom";
import CommentBuilder from "../CommonComp/CommentBuilder";
import imageSample from "../../assets/img/sample.jpg";
import {
  Divider,
  List,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/ThumbUpAltTwoTone";

const styles = (theme) =>
  makeStyles({
    root: {
      width: "920",
      // maxWidth: "36ch",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  });
class SingleBlog extends Component {
  componentDidMount() {
    this.props.getPostBySlug(
      this.props.match.params.slug,
      this.props.auth.token
    );
    console.log(this.props.auth)
  }

  render() {
    const classes = styles;

    return (
      <div style={{ backgroundColor: "lightgrey" }}>
        <Header
          title=""
          subtitle={this.props.site.post.title}
          showButton={false}
          image={
            imageSample
            // this.props.site.post.PostImage
            //   ? this.props.site.post.PostImage.length > 0
            //     ? API.makeFileURL(
            //         this.props.site.post.PostImage[0].url,
            //         this.props.auth.token
            //       )
            //     : imageSample
            //   : ""
          }
        />
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div
                className="post-content"
                dangerouslySetInnerHTML={{
                  __html: this.props.site.post.content,
                }}
              ></div>
            </div>
          </div>
          <br />
          <Divider
            style={{ backgroundColor: "#272727", height: 2 }}
            variant="fullWidth"
          />
          <br />
          <div className="row">
            <div className="col-md-12">
              <h3>Leave a comment</h3>
              {this.props.auth.token ? (
                <CommentBuilder />
              ) : (
                <><p>
                please login to post your thoughts? <Link to="/admin">Sign Up</Link>
              </p>
                <p>
                  Need an account? <Link to="/signup">Sign Up</Link>
                    </p>
                    </>
              )}
            </div>
          </div>
          <br />
          <h3>Comments</h3>
          <div className="row">
            <List className={classes.root}>
              {this.props.site.post.Comments
                ? this.props.site.post.Comments.length > 0
                  ? this.props.site.post.Comments.reverse().map((comment, i) => {
                      return (
                        <Paper elevation={0} style={{ marginBottom: 5, padding: 10, width: 900 }}>
                          <Typography
                            style={{
                              marginBottom: 5, fontSize: 18, fontWeight: 600
                            }}
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {comment.name ? <>{comment.name}</>: "Anonymus user"}
                          </Typography>
                          <br />
                          <Typography
                            style={{
                              marginBottom: 5, fontSize: 15, padding: '0 10px 10px 10px'
                            }}
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {comment.content}
                          </Typography>
                          <br />
                          <p style={{ justifyContent: "space-between", paddingBottom: 6  }}>
                            <Button style={{float: 'left',}} size="small">
                              <FavoriteBorderIcon />
                            </Button>
                            <Typography style={{float: 'right',}} variant="body2" component="span">
                              {comment.createdAt.substring(0, 10)}{" "}
                              {comment.createdAt.substring(11, 16)}
                            </Typography>
                          </p>
                        </Paper>
                      );
                    })
                  : null
                : null}
            </List>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  site: state.site,
});

const mapDispatchToProps = (dispatch) => ({
  getPostBySlug: (slug, token) => {
    dispatch(SiteActions.getPostBySlug(slug, token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog);

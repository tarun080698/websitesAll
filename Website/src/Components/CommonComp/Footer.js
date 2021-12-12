import React, { Component } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer py-4">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-4 text-lg-left">Copyright © Speed UP 2020</div>
              <div class="col-lg-4 my-3 my-lg-0">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-dark btn-social mx-2"
                  href="https://www.linkedin.com/in/tarun-dadlani/"
                >
                  <LinkedInIcon />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-dark btn-social mx-2"
                  href="https://www.facebook.com/tarun.dadlani.5/"
                >
                  <FacebookIcon />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-dark btn-social mx-2"
                  href="https://github.com/tarun080698"
                >
                  <GitHubIcon />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-dark btn-social mx-2"
                  href="https://www.instagram.com/tarun_dadlani/"
                >
                  <InstagramIcon />
                </a>
              </div>
              <div class="col-lg-4 text-lg-right">
                <a class="mr-3" href="#!">
                  Privacy Policy
                </a>
                <a href="#!">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

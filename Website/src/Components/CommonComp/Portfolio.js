import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";

import image from "../../assets/img/sample.jpg"


const portfolio_options = [
  {title:"Delhi", subtitle:"GEMINI", image:image}, {title:"Mumbai", subtitle:"LEO", image:image}, {title:"Chandigarh", subtitle:"PIECES", image:image}, {title:"Nagpur", subtitle:"CANCER", image:image}, {title:"Akola", subtitle:"CAPRICON", image:image}, {title:"Amravati", subtitle:"ARIES", image:image}];
class Portfolio extends Component {
  render() {
    return (
      <div>
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="row">
              {portfolio_options.map((port, id) => {
                return <PortfolioItem {...port} key={id} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;

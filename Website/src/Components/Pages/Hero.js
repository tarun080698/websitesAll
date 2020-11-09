import React from "react";
import Header from "../CommonComp/Header";
import { Carousel,Button } from "antd";


function Hero() {
  return (
    <div id="hero" className="heroBlock">
      <Header />
      <Carousel>
        <div className="container-fluid">
          <div className="content">
            <h3>Welcome To Our Studio!</h3>
            <p>IT'S NICE TO MEET YOU</p>
            <div className="btnHolder">
              <Button size="large">
                <i className="fas fa-desktop" /> Learn more!
              </Button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;

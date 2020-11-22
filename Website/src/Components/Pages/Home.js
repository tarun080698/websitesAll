import React, { Component } from "react";
import Header from "../CommonComp/Header";
import Footer from "../CommonComp/Footer";
import Services from "../CommonComp/Services";
import Portfolio from "../CommonComp/Portfolio";
import Team from "../CommonComp/Team";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

import image from '../../assets/img/header-bg.jpg'

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Studio!"
          subtitle="IT'S NICE TO MEET YOU"
          btntxt="TELL ME MORE"
          link="/services"
          showbtn={true}
          image={image}
        />
        <Services />
        <Portfolio />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;

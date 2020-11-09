import React, { Component } from "react";
import Footer from "../CommonComp/Footer";
import Services from "../CommonComp/Services"
import Portfolio from "../CommonComp/Portfolio"
import Team from "../CommonComp/Team"
import About from './About'
import Contact from "../Pages/Contact"
import Hero from "../Pages/Hero"

class Home extends Component {
  render() {
    return (
      <div className="main">
        <Hero />
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

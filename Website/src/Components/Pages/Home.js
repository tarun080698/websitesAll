import React, { Component } from "react";
import Header from "../CommonComp/Header";
import Services from "../CommonComp/Services"
import Portfolio from "../CommonComp/Portfolio"
import Team from "../CommonComp/Team"
import Contact from "../Pages/Contact"

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Studio!"
          subtitle="IT'S NICE TO MEET YOU"
          btntxt="TELL ME MORE"
          link="/services"
          showbtn={true} />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </div>
    );
  }
}

export default Home;

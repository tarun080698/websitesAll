import React, { Component } from "react";
import ServiceItem from "./ServiceItem";

const services_options = [
  {title:"E-commerce", description:"qwertyu", icon:"fa-shopping-cart"},
  {title:"Designing", description:"qwertyu", icon:"fa-laptop"},
  {title:"Web Security", description:"qwertyu", icon:"fa-lock"},
]
class Services extends Component {
  render() {
    return (
      <div>
        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="row text-center">
              {
                services_options.map((service, id) => { 
                  return <ServiceItem {...service} key={id} />
                })
              }
              </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;

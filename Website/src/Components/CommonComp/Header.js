import React, { Component } from "react";
import { Anchor, Button, Drawer } from "antd";

const { Link } = Anchor;

export class Header extends Component {
  state = {
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <a href="https://www.linkedin.com/in/tarun-dadlani/">
              <i className="fas fa-bolt" style={{ marginRight:"10px"}}></i>
              <b>Speed Up</b>
            </a>
          </div>
          <div className="mobileHidden">
            <Anchor targetOffset="65" style={{ color: "#fff"}}>
              {/* <Link href="#hero" title="Home" /> */}
              <Link href="#services" title="Services" />
              <Link href="#portfolio" title="Portfolio" />
              <Link href="#about" title="About" />
              <Link href="#team" title="Team" />
              <Link href="#contact" title="Contact us" />
            </Anchor>
          </div>
          <div className="mobileVisible">
            <Button type="primary" onClick={this.showDrawer}>
              <i className="fas fa-bars"></i>
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <Anchor targetOffset="65">
              {/* <Link href="#hero" title="Home" /> */}
              <Link href="#services" title="Services" />
              <Link href="#portfolio" title="Portfolio" />
              <Link href="#about" title="About" />
              <Link href="#team" title="Team" />
              <Link href="#contact" title="Contact us" />
              </Anchor>
            </Drawer>
          </div>
        </div>
      </div>

      // <div>
      //   <nav
      //     className="navbar navbar-expand-lg navbar-dark fixed-top"
      //     id="mainNav"
      //   >
      //     <div className="container">
      //       <Link className="navbar-brand js-scroll-trigger" to="/">
      //         Speed-up
      //       </Link>
      //       <button
      //         className="navbar-toggler navbar-toggler-right"
      //         type="button"
      //         data-toggle="collapse"
      //         data-target="#navbarResponsive"
      //         aria-controls="navbarResponsive"
      //         aria-expanded="false"
      //         aria-label="Toggle navigation"
      //       >
      //         Menu
      //         <i className="fas fa-bars ml-1"></i>
      //       </button>
      //       <div className="collapse navbar-collapse" id="navbarResponsive">
      //         <ul className="navbar-nav text-uppercase ml-auto">
      //           <li className="nav-item">
      //             <Link className="nav-link js-scroll-trigger" to="/services">
      //               Services
      //             </Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link className="nav-link js-scroll-trigger" to="/portfolio">
      //               Locations
      //             </Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link className="nav-link js-scroll-trigger" to="/about">
      //               About
      //             </Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link className="nav-link js-scroll-trigger" to="/team">
      //               Team
      //             </Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link className="nav-link js-scroll-trigger" to="/contact">
      //               Contact
      //             </Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link className="nav-link js-scroll-trigger" to="/admin">
      //               AdminPage
      //             </Link>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </nav>
      //   {this.props.children}
      // </div>
    );
  }
}

export default Header;

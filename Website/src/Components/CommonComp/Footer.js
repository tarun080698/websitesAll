import React from 'react'
import { BackTop } from 'antd';

function Footer() {
    return (
        <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <a href="https://github.com">
            <i className="fas fa-bolt"></i>
            <b>Tech</b>
          </a>
              </div>
              <ul className="socials">
                  <li><a href="https://www.facebook.com/tarun.dadlani.5/"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="https://www.hackerrank.com/tarundadlani"><i className="fab fa-hackerrank"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/tarun-dadlani/"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="https://github.com/tarun080698"><i className="fab fa-github"></i></a></li>
                  <li><a href="https://www.instagram.com/tarun_dadlani/"><i className="fab fa-instagram"></i></a></li>
              </ul>
              <div className="copyright">Copyright &copy; 2020 Tech</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
      </div>
    )
}

export default Footer

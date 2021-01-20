/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC7X_QSVEhkiRdujDHJ3KN-w"
                  target="_blank"
                >
                  Youtube
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Link 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Link 3
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="credits ml-auto" style={{fontWeight: "bold"}}>
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Dash web Solutions
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;

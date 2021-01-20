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
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
          "url(" + require("assets/img/ebenezerLogo.jpeg") + ")", width: "100%", backgroundPosition: "center -50px", 
          backgroundRepeat: "no-repeat", backgroundColor: "black"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        {/* className="filter" */}
        <div className="filter"/>
        <Container>
          <div className="motto text-center">
            {/* <h1 style={{color: "green"}}>Ebenezer</h1>
            <div style={{color: "green"}}><h3 >Tours and Safaris</h3></div> */}
            <br />
            <Button
              href="https://www.youtube.com/watch?v=3ZCAuGvl3uQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
              style={{backgroundColor: "black"}}
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            {/* <Button className="btn-round" color="neutral" type="button" outline>
              Download
            </Button> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;

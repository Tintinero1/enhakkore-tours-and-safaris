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
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import ReactDatetime from "react-datetime";
import Adventure from "assets/img/Adventure.jpg"
import ImagesRow from "components/myComponents/ImagesRow.js"
import gal1 from "assets/img/elephantfront.jpg"
import gal2 from "assets/img/galleryImage1.jpeg"
import gal3 from "assets/img/galleryImage2.jpeg"
import gal4 from "assets/img/galleryImage3.jpg"
import gal5 from "assets/img/galleryImage4.jpg"
import gal6 from "assets/img/gal6.jpg"
import gal7 from "assets/img/gal7.jpg"
import gal8 from "assets/img/gal8.jpg"
import gal9 from "assets/img/paisajeGallery.jpeg"
import gal10 from "assets/img/galleryImage5.jpg"
import gal11 from "assets/img/galleryImage6.jpg"
import gal12 from "assets/img/gal12.jpg"

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import '../mainViews/gallery.css'

function Gallery(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="main">
        <div className="section text-center" id="imageDisplayBackgroundGallery" style={{height: "400px"}}>
          {/* <Container style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 style={{color: "white"}} className="title">Prepare to know the beauty of Tanzania!</h2>
                <h5 style={{color: "white"}} className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 style={{color: "white"}} className="info-title">Beautiful Gallery</h4>
                    <p style={{color: "white"}} className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 style={{color: "white"}} className="info-title">New Ideas</h4>
                    <p style={{color: "white"}}>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 style={{color: "white"}} className="info-title">Incredible Animals</h4>
                    <p style={{color: "white"}}>
                      Come to discover the variety of animals that reside in Africa. Don't wait to start your
                      adventure!
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 style={{color: "white"}} className="info-title">Delightful Nature</h4>
                    <p style={{color: "white"}}>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container> */}
        </div>
        <div className="section landing-section" style={{marginBottom: "-150px"}}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center" style={{fontWeight: "Bold"}}>Welcome to the Gallery Section</h2>
                <br></br>
                <p style={{fontWeight: "Bold", fontSize: "20px", textAlign: "center"}}>Take a moment to picture your adventures.</p>
                <img src={Adventure} width="100%" height="60%"></img>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="imageDisplayBackground">
        </div>
        {/* IMAGES TO DISPLAY */}
        <div className="section">
          <Container>
            <div className="title">
              {/* <h3 style={{color: "black", fontWeight: "bold"}}>Gallery</h3> */}
            </div>
            <ImagesRow 
            TitleImage1="Elephat in Ngorongoro national park"
            image1={gal1}
            color1="black"  

            TitleImage2="The view of Kilimanjari from Moshi  town"
            image2={gal2}
            color2="black" 

            TitleImage3="The view of Kilimanjari from Moshi  town" 
            image3={gal3}
            color3="black" 

            TitleImage4="Giraffes in Ngorongoro national park"
            image4={gal4}
            color4="black"
            />
            <ImagesRow 
            TitleImage1="Gazelle in Serengeti national park"
            image1={gal5}
            color1="black"  

            TitleImage2="Gazelles in Serengeti national park"
            image2={gal6}
            color2="black"

            TitleImage3="Mother lion and its cubs in Ngorongoro national park" 
            image3={gal7}
            color3="black"

            TitleImage4="Male lion in Ngorongoro national park"
            image4={gal8}
            color4="black"/>

            <ImagesRow 
            TitleImage1="The view of Kilimanjari from Moshi town"
            image1={gal9}
            color1="black"  

            TitleImage2="Rock tours"
            image2={gal10}
            color2="black"

            TitleImage3="Kilimanjaro waterfalls" 
            image3={gal11}
            color3="black"

            TitleImage4="Maasai tribe in Manyara"
            image4={gal12}
            color4="black"/>
            
            
          </Container>
        </div>
        
      </div>
      <DemoFooter />
    </>
  );
}

export default Gallery;

import React from 'react';
import 'views/mainViews/tours.css'

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

export default function ImagesRow(props) {

  var color1 = 'white';
  var color2 = 'white';
  var color3 = 'white';
  var color4 = 'white';
  if(props.color1 !== undefined){
    color1 = props.color1
  }
  if(props.color2 !== undefined){
    color2 = props.color2
  }
  if(props.color3 !== undefined){
    color3 = props.color3
  }
  if(props.color4 !== undefined){
    color4 = props.color4
  }

    return(
        <div>
            <Row>
              <Col md="3" sm="8">
                <h4  className="images-title" style={{color: color1, fontWeight: "bold", fontSize: "20px"}}>{props.TitleImage1}</h4>
                <img
                  id="GalleryImages"
                  alt="..."
                  className="img-rounded img-responsive"
                  src={props.image1}
                />
                {/* <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/David.jpg")}
                    />
                  </div>
                  <p>David Patience</p>
                </div> */}
              </Col>
              <Col md="3" sm="8">
              <h4 className="images-title" style={{color: color2, fontWeight: "bold", fontSize: "20px"}}>{props.TitleImage2}</h4>
                <img
                  id="GalleryImages"
                  alt="..."
                  className="img-rounded img-responsive"
                  src={props.image2}
                />
                {/* <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/David.jpg")}
                    />
                  </div>
                  <p>David Patience</p>
                </div> */}
              </Col>
              <Col md="3" sm="8">
              <h4 className="images-title" style={{color: color3, fontWeight: "bold", fontSize: "20px"}}>{props.TitleImage3}</h4>
                <img
                  id="GalleryImages"
                  alt="..."
                  className="img-rounded img-responsive"
                  src={props.image3}
                />
                {/* <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/David.jpg")}
                    />
                  </div>
                  <p>David Patience</p>
                </div> */}
              </Col>
              <Col md="3" sm="6">
              <h4 className="images-title" style={{color: color4, fontWeight: "bold", fontSize: "20px"}}>{props.TitleImage4}</h4>
                <img
                  id="GalleryImages"
                  alt="..."
                  className="img-rounded img-responsive"
                  src={props.image4}
                />
                {/* <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/David.jpg")}
                    />
                  </div>
                  <p>David Patience</p>
                </div> */}
                
              </Col>
            </Row>
            <br></br>
        </div>
    )
}
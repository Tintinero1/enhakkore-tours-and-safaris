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
import '../mainViews/landingpageclass.css'

function LandingPage(props) {
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
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center" id="imageDisplayBackgroundLand">
          <Container style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
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
                      Spend your time imaginating your adventures in Tanzania's gallery.
                    </p>
                    <Button className="btn-link" color="info" href="/gallery">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-circle-10" />
                  </div>
                  <div className="description">
                    <h4 style={{color: "white"}} className="info-title">Delightful Team</h4>
                    <p style={{color: "white"}}>
                      Eficient, yet charming and fun team. All oriented to your tours and safaris desires.
                    </p>
                    <Button className="btn-link" color="info" href="#Team">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-world-2" />
                  </div>
                  <div className="description">
                    <h4 style={{color: "white"}} className="info-title">Incredible Animals</h4>
                    <p style={{color: "white"}}>
                      Come to discover the variety of animals that reside in Africa. Don't wait to start your
                      adventure!
                    </p>
                    <Button className="btn-link" color="info" href="/tours">
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
                      Find unique and delightful places only known in Tanzania!
                    </p>
                    <Button className="btn-link" color="info" href="/safaris">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <center>
          <br></br><br></br><br></br>
            <div style={{width: "70%", backgroundColor: "white", height: "200x", backgroundImage: "none", position: "relative", marginBottom: "100px"}}>
            <h3 style={{textAlign: "left", fontWeight: "bold"}}>Welcome</h3>
            <br></br>
              <p color="black" style={{fontWeight: "bold", textAlign: "justify"}}>En hakkore welcomes you to the harbour of peace. 
              We are very happy that you are here with us. For many this is the biggest dream and desire that they have had, 
              we won't make it anything lesser than that. You will feel at home with us because you are our number one priority. 
              Enjoy navigating in our website and do not hesitate to write to us for any doubts you may have. 
              En Hakkore is the team you have been waiting for to make your stay in tanzania memorable.</p>
            
            <h3 style={{textAlign: "left", fontWeight: "bold"}}>Why us?</h3>
            <br></br>
              <p color="black" style={{fontWeight: "bold", textAlign: "justify"}}>Tanzania has a lot to offer from culture, 
              excursions, beaches, hunting spots etc. For your stay to be the best you need the best team and we are your team 
              because our greatest desire is not only to give you the best experience but also to make you wanna come back again 
              and again. We want to make you feel at home with people who care for you and your interests. 
              We will give assistance on which routes a safest and cheapest to reach Tanzania and within the country we will also 
              give you advice about destinations that are affordable and offer equally the best experience.</p>
            
            <h3 style={{textAlign: "left", fontWeight: "bold"}}>MISSION:</h3>
            <br></br>
              <p color="black" style={{fontWeight: "bold", textAlign: "justify"}}>To serve our clients with enhanced travelling 
              experience by providing them with quality services focused on their needs, through the most efficient arrangements 
              so that customer loyalty, superior financial results and customer satisfaction can be achieved.</p>
            
            <h3 style={{textAlign: "left", fontWeight: "bold"}}>VISION:</h3>
            <br></br>
              <p color="black" style={{fontWeight: "bold", textAlign: "justify"}}>To be the most trusted and respected Travel Agency 
              recognised by our clients within and outside the country for delivering excellent services. To be a leading provider of 
              travelling solution across Tanzania and to continuously create new tourism experiences in our business strategy.</p>
            
            </div>
        </center>
        <SectionCarousel/>
        {/* IMAGES TO DISPLAY */}
        <div className="section">
          <Container>
            <div className="title">
              <h3 style={{fontWeight: "Bold"}}>Make Amazing Discoveries</h3>
            </div>
            <Row>
              <Col md="4" sm="6">
                <h4  className="images-title" style={{fontWeight: "Bold"}}>Mount meru</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/volcan.jpg")}
                  style={{height: "230px"}}
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/David.jpg")}
                    />
                  </div>
                  <p>David Patience</p>
                </div>
              </Col>
              <Col md="4" sm="6">
              <h4 className="images-title" style={{fontWeight: "Bold"}}>Kilimanjaro waterfalls</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Waterfall.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/David.jpg")}
                    />
                  </div>
                  <p>David Patience</p>
                </div>
              </Col>
              <Col md="4" sm="6">
              <h4 className="images-title" style={{fontWeight: "Bold"}}>Rock tours</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/canion.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/David.jpg")}
                    />
                  </div>
                  <p>David Patience</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        
        <div className="section section-dark text-center" style={{backgroundColor: "green",
          backgroundImage: "url(" + require("assets/img/girafasol2.jpg") + ")", backgroundPosition: "center -400px",
          backgroundSize: "cover"
        }}>
          <Container id="Team" style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/guide1.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sundey kitumi laizer</CardTitle>
                        <h6 className="card-category">Owner</h6>
                      </div>
                    </a>
                    <p className="card-description text-justify" style={{fontWeight: "bold"}}>
                    Harnessed with ability to rise to the growing competition with atmost proficiency 
                    and extra-ordinary hands on experience in tourism industry.
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/guide3.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Moses Richard chambila</CardTitle>
                        <h6 className="card-category">Owner</h6>
                      </div>
                    </a>
                    <p className="card-description text-justify" style={{fontWeight: "bold"}}>
                    All achieved through good leadership and total team effort in coordinating 
                    and management to bring tourism experience close to you at a fraction of the cost.
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/David.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">David Patience</CardTitle>
                        <h6 className="card-category">Owner</h6>
                      </div>
                    </a>
                    <p className="card-description text-justify" style={{fontWeight: "bold"}}>
                    Sky is the limit for those who dream and I am a big dreamer. 
                    I dream of giving our clients the best experience of Tanzanian Safari. 
                    Being exposed to many cultures allows me to plan a unique experience with our clients 
                    so that their stay in our little heaven is most fruitful. This trip is about you and what 
                    you dream to accomplish. I want to help you to make it that way.
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Request a Free Quote</h2>
                <br></br>
                <p>Don't let this oportunity go away from you. We would love to have you adventuring in the country of Tanzania</p>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input id="name" placeholder="Name" type="text" onChange={props.handleTextChange}/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input id="email" placeholder="Email" type="text" onChange={props.handleTextChange}/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <label>Country</label>
                      <InputGroup for="country">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-globe-2" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input id="country" placeholder="Country" value={props.country} disabled={true}
                        inputProps={{
                          value: document.getElementsByName("countryList").value,
                        }}/>
                        <select id="countryList" name="countryList" onChange={props.handleTextChange}>
                          <option value="Afganistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bonaire">Bonaire</option>
                          <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                          <option value="Botswana">Botswana</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                          <option value="Brunei">Brunei</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Canary Islands">Canary Islands</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Cayman Islands">Cayman Islands</option>
                          <option value="Central African Republic">Central African Republic</option>
                          <option value="Chad">Chad</option>
                          <option value="Channel Islands">Channel Islands</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Christmas Island">Christmas Island</option>
                          <option value="Cocos Island">Cocos Island</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote DIvoire">Cote DIvoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Curaco">Curacao</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">Dominican Republic</option>
                          <option value="East Timor">East Timor</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Falkland Islands">Falkland Islands</option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="French Guiana">French Guiana</option>
                          <option value="French Polynesia">French Polynesia</option>
                          <option value="French Southern Ter">French Southern Ter</option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Great Britain">Great Britain</option>
                          <option value="Greece">Greece</option>
                          <option value="Greenland">Greenland</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guadeloupe">Guadeloupe</option>
                          <option value="Guam">Guam</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Hawaii">Hawaii</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="India">India</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Isle of Man">Isle of Man</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Korea North">Korea North</option>
                          <option value="Korea Sout">Korea South</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Laos">Laos</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libya">Libya</option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macau">Macau</option>
                          <option value="Macedonia">Macedonia</option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">Marshall Islands</option>
                          <option value="Martinique">Martinique</option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mayotte">Mayotte</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Midway Islands">Midway Islands</option>
                          <option value="Moldova">Moldova</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montserrat">Montserrat</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Nambia">Nambia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherland Antilles">Netherland Antilles</option>
                          <option value="Netherlands">Netherlands (Holland, Europe)</option>
                          <option value="Nevis">Nevis</option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Niue">Niue</option>
                          <option value="Norfolk Island">Norfolk Island</option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau Island">Palau Island</option>
                          <option value="Palestine">Palestine</option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">Papua New Guinea</option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Phillipines">Philippines</option>
                          <option value="Pitcairn Island">Pitcairn Island</option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Republic of Montenegro">Republic of Montenegro</option>
                          <option value="Republic of Serbia">Republic of Serbia</option>
                          <option value="Reunion">Reunion</option>
                          <option value="Romania">Romania</option>
                          <option value="Russia">Russia</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="St Barthelemy">St Barthelemy</option>
                          <option value="St Eustatius">St Eustatius</option>
                          <option value="St Helena">St Helena</option>
                          <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                          <option value="St Lucia">St Lucia</option>
                          <option value="St Maarten">St Maarten</option>
                          <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                          <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                          <option value="Saipan">Saipan</option>
                          <option value="Samoa">Samoa</option>
                          <option value="Samoa American">Samoa American</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">Solomon Islands</option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syria">Syria</option>
                          <option value="Tahiti">Tahiti</option>
                          <option value="Taiwan">Taiwan</option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Erimates">United Arab Emirates</option>
                          <option value="United States of America">United States of America</option>
                          <option value="Uraguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Vatican City State">Vatican City State</option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                          <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                          <option value="Wake Island">Wake Island</option>
                          <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zaire">Zaire</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <label>Arrival Date</label>
                        <InputGroup className="date" id="datetimepicker">
                          <ReactDatetime
                            onChange={props.handleDateArrivalChange}
                            id="arrivalDate"
                            inputProps={{
                              placeholder: "Click to choose Date",
                            }}
                          />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <span className="glyphicon glyphicon-calendar">
                                <i aria-hidden={true} className="fa fa-calendar" />
                              </span>
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      <label>Departure Date</label>
                        <InputGroup className="date" id="datetimepicker">
                          <ReactDatetime
                            onChange={props.handleDateDepartureChange}
                            id="departureDate"
                            inputProps={{
                              placeholder: "Click to choose Date",
                            }}
                          />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <span className="glyphicon glyphicon-calendar">
                                <i aria-hidden={true} className="fa fa-calendar" />
                              </span>
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                    </Col>
                  </Row>
                  <Row></Row>
                  <label>Message</label>
                  <Input
                    id="message"
                    placeholder="Feel free to tell us any doubts that you may have or details that you want to know..."
                    type="textarea"
                    rows="4"
                    onChange={props.handleTextChange}
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button onClick={(e) => props.sendEmail(e)} className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;

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
import ImagesRow from "components/myComponents/ImagesRow.js"
import gal1 from "assets/img/girafas.jpg"
import gal2 from "assets/img/gal2.jpg"
import gal3 from "assets/img/gal3.jpg"
import gal4 from "assets/img/gal4.jpg"
import gal5 from "assets/img/gal5.jpg"
import gal6 from "assets/img/gal6.jpg"
import gal7 from "assets/img/gal7.jpg"
import gal8 from "assets/img/gal8.jpg"
import gal9 from "assets/img/gal9.jpg"
import gal10 from "assets/img/gal10.jpeg"
import gal11 from "assets/img/gal11.jpg"
import gal12 from "assets/img/gal12.jpg"

// Safari Carrousel
import safcar1 from "assets/img/safcar1.jpg"
import safcar2 from "assets/img/safcar2.jpg"
import safcar3 from "assets/img/safcar3.jpg"

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
import '../mainViews/safaris.css'

function Safaris(props) {
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
        <div className="section text-center" id="imageDisplayBackground" style={{height: "400px"}}>
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
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center" style={{fontWeight: "bold"}}>Welcome to the En Hakkore Safaris section</h2>
                <br></br>
                <p style={{fontWeight: "bold"}}>In here you will have the chance to see the amazing animals and places that you could see in your adventure with us!</p>
                <p style={{fontWeight: "bold"}}>We just want the best for you to keep living your life and discovering new adventures. That's why we would like to give you this preview.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
        <SectionCarousel
        image1 = {safcar1}
        caption1 = "Unbelievable creatures"
        image2 = {safcar2}
        caption2 = "Fun and more fun"
        image3 = {safcar3}
        caption3 = "Car adventure"
        />
        <center>
            <div style={{width: "70%", backgroundColor: "white", height: "200x", backgroundImage: "none", position: "relative", marginBottom: "100px"}}>
            <h3 style={{textAlign: "left", fontWeight: "bold"}}>We are glad you are comming</h3>
            <br></br>
              <p color="black" style={{fontWeight: "bold", textAlign: "justify"}}>After you have decided to target your adventure into Tanzania, you will find extraordinary places to discover while we guide you into the unknown. 
              See unbelievable landscapes, beautiful nature and a strong diversity of wild life. Have a chance to talk with our amazing team, we will recieve you with all our joy and warm hearts, we promise that the first thing
              that you will see from us is our happiness in our smile.</p>
            
            <h3 style={{textAlign: "left", fontWeight: "bold"}}>Special Recommendation</h3>
            <br></br>
              <p color="black" style={{fontWeight: "bold", textAlign: "justify"}}>It is important to plan your trip with anticipation. 
              There are so many sites to visit and for many, time is the problem. Because of this, our guides will help you to narrow down your interests so that your expectations may be met. 
              To be able to control your schedule and what to do, where to go and when to do so; an individual trip is your best option. If you want to cut down costs then a group trip is your best option. 
              This will need some flexibility on your part so that the interests of the group are met. 
              Among the most important must see sites in Tanzania include: Mt Kilimanjaro, Ngorongoro crater, Olduvai gorge and Zanzibar beaches.</p>
            
            </div>
        </center>
        
        </div>
        {/* IMAGES TO DISPLAY */}
        <div className="section" style={{backgroundColor: "green",
          backgroundImage: "url(" + require("assets/img/bgtanz.jpg") + ")", backgroundPosition: "center 0px", backgroundRepeat: "repeat"
          ,color: "white", fontWeight: "bold", backgroundSize: "cover"
        }}>
          <Container>
            <div className="title">
              <h3 style={{color: "white", fontWeight: "bold"}}>Make Amazing Discoveries</h3>
            </div>
            <ImagesRow 
            TitleImage1="Giraffes in Ngorongoro national park"
            image1={gal1}  

            TitleImage2="Giraffe in Ngorongoro national park"
            image2={gal2}

            TitleImage3="Zebras in Serengeti national park" 
            image3={gal3}

            TitleImage4="Sunset in Serengeti national park"
            image4={gal4}/>
            <ImagesRow 
            TitleImage1="Students in Tanzania"
            image1={gal5}  

            TitleImage2="Gazelle in Serengeti national park"
            image2={gal6}

            TitleImage3="Mother lion and its cubs in Ngorongoro national park" 
            image3={gal7}

            TitleImage4="Male lion in Ngorongoro national park"
            image4={gal8}/>

            <ImagesRow 
            TitleImage1="Meteor in Mbozi Mbeya"
            image1={gal9}  

            TitleImage2="Hippos in lake Manyara"
            image2={gal10}

            TitleImage3="Volvanic stones in Ngorongoro" 
            image3={gal11}

            TitleImage4="Maasai tribe in Manyara"
            image4={gal12}/>
            
            
          </Container>
        </div>
        
        <div className="section section-dark text-center" style={{backgroundColor: "white",
          backgroundImage: "url(" + require("assets/img/bglions.jpg") + ")", backgroundPosition: "center -100px",
          backgroundSize: "cover"
        }}>
          <Container style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
            <h2 className="title">We would love to have you here!</h2>
            <Row>
              <center>

              
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
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
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
              </center>
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

export default Safaris;

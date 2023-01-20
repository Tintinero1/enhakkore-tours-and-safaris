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
import '../mainViews/tours.css'

function Tours(props) {
  document.documentElement.classList.remove("nav-open");
  // var activeDayTour = 6;
  // var setActiveDayTour = 6;
  const [activeDayTour, setActiveDayTour] = React.useState(() => {return 5});
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
        <div className="section text-center" id="imageDisplayBackgroundTour" style={{height: "400px"}}>
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
                <h2 className="text-center" style={{fontWeight: "Bold"}}>Welcome to the En Hakkore Tours section</h2>
                <br></br>
                <p style={{fontWeight: "Bold"}}>In here you will have the chance to see the amazing animals and places that you could see in your adventure with us!</p>
                <p style={{fontWeight: "Bold"}}>We just want the best for you to keep living your life and discovering new adventures. That's why we would like to give you this preview.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="imageDisplayBackground">
        <SectionCarousel />
        </div>
        {/* IMAGES TO DISPLAY */}
        <div className="section" style={{backgroundColor: "white",
          backgroundImage: "url(" + require("assets/img/bg2.jpg") + ")", backgroundPosition: "center px", backgroundRepeat: "repeat"
          ,color: "white", fontWeight: "bold", backgroundSize: "cover"
        }}>
          <Container>
            <div className="title">
              <h3 style={{color: "black", fontWeight: "bold"}}>Make Amazing Discoveries</h3>
            </div>
            <ImagesRow 
            TitleImage1="Giraffes in Ngorongoro national park"
            image1={gal1}
            color1="black"  

            TitleImage2="Giraffe in Ngorongoro national park"
            image2={gal2}
            color2="black" 

            TitleImage3="Zebras in Serengeti national park" 
            image3={gal3}
            color3="black" 

            TitleImage4="Sunset in Serengeti national park"
            image4={gal4}
            color4="black" />
            
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
        <center>
        <div id="toursButtons">
          <div><Button onClick={() =>{setActiveDayTour(5)}}>5 Day tour</Button></div>
          <div><Button onClick={() =>{setActiveDayTour(6)}}>6 Day tour</Button></div>
          <div><Button onClick={() =>{setActiveDayTour(7)}}>7 Day tour</Button></div>
          <div><Button onClick={() =>{setActiveDayTour(9)}}>9 Day tour</Button></div>
        </div>

        { activeDayTour === 5 &&
          <div style={{width: "80%"}}>
          <div style={{fontWeight: "bold"}}>
            <h4 style={{fontWeight: "bold"}}>5 DAYS SAFARI ITINERARY</h4>
            <br></br>
          </div>
          <p className="textJustify">
          <div style={{fontWeight: "bold"}}>
            DAY 01 <br></br>
            Tarangire National Park
          </div>
          Meet the guide/driver, after breakfast, who will deliver a short briefing.
          <br></br><br></br>
          Head into the Tarangire National Park for a game drive. The park runs along the line of the Tarangire River and is mainly made up of low-lying hills on the Great Rift Valley floor. Its natural vegetation mainly consists of Acacia woodland and giant African Baobab trees, with huge swamp areas in the south. Both the river and the swamps act like a magnet for wild animals, during Tanzania’s dry season. The Tarangire National Park is reputed to contain some of the largest elephant herds in Africa. This African national park is also home to three rare species of animals – the Greater Kudu, the Fringed-eared Oryx, as well as a few Ashy Starlings. 
          <br></br><br></br>
          Eat a picnic lunch after which you continue with a game drive until late evening.
          <br></br><br></br>
          Drive to the accommodation for overnight.
          <br></br><br></br>
          <div style={{fontWeight: "bold"}}>
            DAY 02 <br></br>
            Serengeti National Park 
          </div>
          Head, after breakfast, towards the Serengeti National Park, via the beautiful high lying farmland of Karatu and the Ngorongoro Conservation Area. Leaving the highlands behind, descend into the heart of wild Africa – the Serengeti National Park – with its endless plains, rolling into the distance as far as the eye can see. Head to the central park area, known as the Seronera area, one of the richest wildlife habitats in the park, featuring the Seronera River, which provides a valuable water source to this area and therefore attracts wildlife well representative of most of the Serengeti’s species. 
          <br></br><br></br>
          Arrive in time for lunch and enjoy an afternoon game drive in the Serengeti National Park.
          <br></br><br></br>
          Dinner and overnight in the Seronera area, as per the standard and type of accommodation option requested.
          <br></br><br></br>
          <div style={{fontWeight: "bold"}}>
            DAY 03 <br></br>
            Serengeti National Park 
          </div>
          Do an after breakfast game viewing drive along the Sogore River Circuit, which loops into the plains south of the Seronera River, and which is good for possible Lion, Thomson gazelle, topi, ostrich and cheetah sightings. The Visitor Centre close to the Serengeti Seronera Lodge and public campsites, is well worth a visit after the morning’s game drive. This nicely designed centre offers some interesting wildlife displays as well as a gift shop selling information leaflets and maps of the area. 
          <br></br><br></br>
          Enjoy a relaxed picnic lunch at the centre in the shade of the giant acacia trees. 
          <br></br><br></br>
          Follow, in the afternoon, the Kopjes Circuit, which goes anti-clockwise around the Maasai Kopjes, which usually attract a number of lions and some formidably large cobras.
          <br></br><br></br>
          <div style={{fontWeight: "bold"}}>
            DAY 04 <br></br>
            Serengeti National Park - Ngorongoro Crater
          </div>
          Head to the Ngorongoro Crater after breakfast and take partly adventurous roads about 600 meters down into the crater. The crater has a diameter of 17-21 kilometres and is the home of a great animal world. Nearly all the biodiversity of the East African savannah has gathered here, only giraffes and a few other animal species for which the rock faces are too steep do not live in the crater. Depending on the season, 15,000 to 25,000 animals are gathering here, thereof more than two-thirds buffaloes, gnus, zebras and gazelles. This large number of grazers also explains why in the crater the largest density of predators in Africa can be found. Beside other predators, more than 100 lions live here in several prides. The chances of watching the "Big Five" lion, elephant, buffalo, rhino and leopard within just a few hours are here particularly good. 
          <br></br><br></br>
          Go up, in the afternoon, the steep crater walls and then straight to lodge for overnight.
          <br></br><br></br>
          <div style={{fontWeight: "bold"}}>
            DAY 05 <br></br>
            Ngorongoro Crater - Arusha/kilimanjaro
          </div>
          scrumptious breakfast.
          <br></br><br></br>
          Travel back to Arusha where you will arrive around midday. You will be dropped off in the city centre or at the airport.<br></br>
          <br></br>
          <div style={{fontWeight: "bold"}}>
            Tarangire National Park, Serengeti National Park, Ngorongoro Conservation Area, Arusha
          </div>
          </p>
        </div>}

        { activeDayTour === 6 &&
          <div style={{width: "80%"}}>
          <div style={{fontWeight: "bold"}}>
            <h4 style={{fontWeight: "bold"}}>6 Days Nature tour itinerary for Tanzania:</h4>
            <br></br>
          </div>
          <p className="textJustify">
          <div style={{fontWeight: "bold"}}>
            DAY 01 <br></br>
            Tarangire National Park
          </div>
          
          The drive from Moshi to Tarangire National Park takes about three hours. This park is spectacular in the dry season when many of the migratory wildlife species come back to the permanent waters of the Tarangire River. 
          Huge herds of wildebeest, zebras, elephants, elands, and Oryx gather to stay in Tarangire until the onset of the rain when they migrate again to good grazing areas. <br></br>
          Overnight at the Hotel of your choice.
          <div style={{fontWeight: "bold"}}>
            DAY 02 <br></br>
            Drive to lake Eyasi
          </div>
          
          Drive from the hotel to Lake Eyasi. You will see great birdlife along the shore, and location alone makes it a great place to spend a couple of nights. Also, the meadows along the lake shores and forest are home to a wide variety of 
          wildlife including leopard, hippos, a variety of monkeys, various birds, greater and lesser flamingoes, storks, and pelicans. Several pleasant, private campsites are located in forest clearings by the lake, and these provide grassy tent
          spaces and shower facilities made mostly from local materials. <br></br>

          Drive back to the Highview Hotel or similar hotel for your overnight - full board.
          <div style={{fontWeight: "bold"}}>
            DAY 03 <br></br>
            Drive to Serengeti national park
          </div>
          
          The drive to Serengeti National Park via Olduvai Gorge takes 3 to 4 hours. Olduvai Gorge is an archaeological site located in the eastern Serengeti plains, in which early human fossils were first discovered. It has an amazing landscape that resulted from the same tectonic forces that created the Great Rift Valley millions of years ago. 
          Then in the late evening, drive to and overnight at the Serengeti Wild Camp or Ikoma Wild Camp - full board.
          <div style={{fontWeight: "bold"}}>
            DAY 04 <br></br>
            Venture into the Serengeti's wilderness
          </div>
          
          After breakfast, venture into Serengeti’s wilderness corners for a full day of game viewing in the park. With a picnic lunch beside you, take your leisure while exploring this world heritage site, where earth’s largest concentration of plain game still roams free! <br></br>
          In the late evening, go to the Serengeti Wild Camp for rest, dinner, and overnight.
          <div style={{fontWeight: "bold"}}>
            DAY 05 <br></br>
            Drive to Ngorongoro crater
          </div>
          
          After breakfast, drive to Ngorongoro Crater for a game drive inside the crater. This is the best place in Tanzania to see black rhino as well as the pride of lions that include the magnificent black-maned males. There are lots of colorful flamingoes and a variety of water birds. Other game that you can see includes leopard, cheetah, hyena, other members of the antelope family, and small mammals.<br></br>
          In the late afternoon drive to Highview Hotel for Dinner and overnight.
          <div style={{fontWeight: "bold"}}>
            DAY 06 <br></br>
            Drive to lake Manyara national park
          </div>

          The drive from the Highview Hotel to Lake Manyara National Park takes about 30 Minutes. After having a picnic lunch in Manyara, you start a late afternoon game drive, which is the best time to view animals in this park. When you approach it from the east, the Rift Valley escarpment looms on the horizon forming an impressive backdrop to the lake. In the tall trees of the groundwater forest, monkeys leap from branch to branch, and on the escarpment, elephants stand in the shade. Other animals frequently seen are zebras, impalas, monkeys, giraffes, buffalos, hippos, and others. 
          <br></br>
          In the late afternoon, drive back to the Spring lands Hotel in Moshi.
          <div style={{fontWeight: "bold"}}>
            ￼Moshi, Serengeti National Park, Tarangire National Park, Lake Manyara, Ngorongoro Conservation Area
          </div>
          </p>
        </div>}

        { activeDayTour === 7 &&
          <div style={{width: "80%"}}>
          <div style={{fontWeight: "bold"}}>
            <h4 style={{fontWeight: "bold"}}>7 Days wildlife tour itinerary for Tanzania: reap the benefits of the great wildebeest migration safari</h4>
            <br></br>
          </div>
          <p className="textJustify">
          <div style={{fontWeight: "bold"}}>
            Serengeti National Park-Tanzania 
          </div>
          Witness the annual wildebeest migration in Tanzania’s Serengeti plains and Kenya’s Masai Mara National Reserve, one of the most spectacular wildlife events on the planet. Visit the best wildlife national parks of Northern Tanzania which contain an abundance of wildlife seen nowhere else on Earth.
          <div style={{fontWeight: "bold"}}>
            DAY 01 <br></br>
            Arusha -Tarangire National park 
          </div>
          
          Get picked up from your hotel in Arusha or Moshi at 8:00 am and drive towards Tarangire National Park about 2 hours drive from Arusha.<br></br>
          Embark on an all-day game drive.<br></br>
          Stay overnight at Tarangire Safari Lodge. Since you will be on safari for seven days, you will stop at the shop for you to pick up some stuff as final shopping for your own personal things.
          <div style={{fontWeight: "bold"}}>
            DAY 02 <br></br>
            Tarangire/Serengeti
          </div>
          Start driving, after breakfast, toward Serengeti via Ngorongoro Conservation Area with on transit game drive. <br></br>

          Enjoy all afternoon game drive and overnight at Serengeti Serena lodge. As an optimal activity, you can pass through Olduvai gorge early human being excavated center, where the first human skull was discovered. Otherwise, you just proceed to Serengeti as you stop several times for wildlife viewing.
          <div style={{fontWeight: "bold"}}>
            DAY 03 <br></br>
            Serengeti north
          </div>
          Wake up early this morning where you can do balloon safari for the extra money and request. <br></br>

          Start game driving, after breakfast, heading to the northern Serengeti for full day game drive inside Serengeti 
          for the aim of spotting migration and game drive for other wildlife as well. <br></br>

          Stay overnight at Serengeti Acacia Tented Luxury Lodge in northern Serengeti.
          <div style={{fontWeight: "bold"}}>
            DAY 04 <br></br>
            Serengeti north
          </div>
          Enjoy another full day game drive inside Serengeti searching for migration or viewing and other wildlife.  <br></br>
          
          Stay overnight at Serengeti Acacia Luxury Tented Camp in northern Serengeti or Mara under canvas tented luxury camp. This is a day to cover what you did not cover yesterday and more relaxed.
          <div style={{fontWeight: "bold"}}>
            DAY 05 <br></br>
            Serengeti /Ngorongoro Highlands
          </div>
          
          
          Go for a morning game drive in Serengeti till lunchtime.<br></br>
          
          Embark on an en-route game drive towards Ngorongoro Conservation Area.<br></br>

          Stay overnight at Ngorongoro Serena Lodge. Expect about good 4-5 hours of driving but since you will be stopping regularly for animal viewing on the way you won't feel the distance. This day is good for Masai Village excursions as an optional activity.
          <div style={{fontWeight: "bold"}}>
            DAY 06 <br></br>
            Ngorongoro crater
          </div>

          
          Appreciate game drive inside the Ngorongoro Crater for the all-day. Ngorongoro Crater is one of the seven wonders of Africa, referred to as an animal paradise where you will see different species just inside the crater. 
          <br></br>
          Stay overnight at Karatu Simba Lodge which is outside the gate or Ngorongoro Wildlife Lodge inside the park. 
          <div style={{fontWeight: "bold"}}>
            Main Destination: Ngorongoro Crater
          </div>
          <div style={{fontWeight: "bold"}}>
            DAY 07 <br></br>
            Lake Manyara National park -Arusha 
          </div>
          Do a game drive at Lake Manyara National Park till lunchtime.
          <br></br>
          Visit the market area in Mto wa mbu.
          <br></br>
          Start driving to Arusha City for overnight at your hotel or drive straight to the airport for your evening flight to Zanzibar or home. Flight from Lake Manyara to Arusha is only two hours and to Kilimanjaro airport is three hours.
          <div style={{fontWeight: "bold"}}>
            Main Destination: Lake Manyara National Park 
          </div>
          </p>
        </div>}

        { activeDayTour === 9 &&
          <div style={{width: "80%"}}>
          <div style={{fontWeight: "bold"}}>
            <h4 style={{fontWeight: "bold"}}>9 Days Safari tour itinerary for Tanzania</h4>
            <br></br>
          </div>
          <p className="textJustify">
          <div style={{fontWeight: "bold"}}>
            Ngorongoro Conservation Area-Tanzania  
          </div>
          See how this safari unveils to you the best of Tanzania. From the unforgettable wildlife galore to the cultural experiences, it will surely take your breath away. You will visit all northern circuit national parks where you will see the Big 5 and also the spectacular migration depending on the date of travel.<div style={{fontWeight: "bold"}}>
            DAY 01 <br></br>
            Tarangire National Park 
          </div>
          
          Get picked up at your hotel after breakfast and together with your guide, drive to Tarangire National Park. In 1970, the national park emerged from a former colonial hunting ground. It has a very diverse animal world, not least because of its size, which corresponds to approximately Luxembourg. The park is home to one of the largest elephant populations in the north of Tanzania but is also home to many other wild animals. With some luck, you can spot lions, cheetahs or leopards. The landscape of the park is very diverse. Especially the huge baobab trees, which are located close together in the north-eastern sector of the park, are particularly impressive. <br></br>
          
          Finish an extensive game drive and stay overnight at Eileen’s Tree Inn.
          <div style={{fontWeight: "bold"}}>
            DAY 02 <br></br>
            Lake Manyara National Park
          </div>
          Head to Lake Manyara National Park after breakfast. The park is dominated by the lake of the same name, which attracts large colonies of waterbirds. Particularly impressive are the pink-coloured flamingos, but also many other bird species such as cormorants, pelicans or storks can be observed here. A total of about 400 different bird species live in the park. The park is also famous for its tree-climbing lions, which are usually found in the central and open part of the park. During the safari, you will also see elephants, zebras, giraffes, buffaloes, hippos and many other animal species.  <br></br>
          
          Leave the national park in the late afternoon, and spend the night at Eileen’s Tree Inn.
          <div style={{fontWeight: "bold"}}>
            DAY 03 <br></br>
            Lake Eyasi 
          </div>
          
          Wake up for an early breakfast. <br></br>

          Drive to Lake Eyasi. The Hadzabe Bushmen are the last true hunter-gatherers in East Africa The Hadzabe live almost the same way as your own ancestors in the Stone Age. They hunt animals with bow and arrow and collect fruits, roots and honey from the baobab trees. 
          <br></br>
          Receive a welcome and an insight into the village life, and then it goes with some men on common hunting. The hunt takes place at a fairly fast pace, especially when an animal is spotted. The Hadzabe hunt antelopes and gazelles, but also smaller animals such as birds or mongooses. 
          <br></br>
          Visit then the Datoga Tribe in the late morning. These pastoralists are also skilled blacksmiths. They collect metal scrap, which they cleverly process into bracelets, arrowheads and knives. You also have the opportunity to visit one of the huts in the village. Here you can watch the women how they grind flour from corn, from which later bread is baked.
          <br></br>
          Return to Karatu in the late afternoon.
          <div style={{fontWeight: "bold"}}>
            DAY 04 <br></br>
            Lake Natron
          </div>
          
          Head to Lake Natron after breakfast. Just past Mto wa Mbu, you leave the asphalted road, along the East African Rift Valley and the drive continues on adventurous slopes. The drive leads past Maasai villages and the holy mountain of the Maasai, the Ol Doinyo Lengai. As soon as the Maasai village Ngare Sero comes into sight, it is not far to the lake. The outlet Lake Natron is the home of a remarkable variety of birds, in particular about 2.5 million dwarf flamingos; the lake serves them as a regular breeding ground. The water is strongly saline and the basis of life for unicellular algae and bacteria, which are responsible for the planar red-brown to purple-violet coloring of the lake. The area around Lake Natron is one of the most beautiful and unspoilt regions in Africa. 
          <br></br>
          Hike to the lake and then you will visit the nearby waterfalls, a true oasis with awesome waters to swim. 
          <br></br>
          Stay overnight at Maasai Giraffe Eco Lodge at Lake Natron.
          <div style={{fontWeight: "bold"}}>
            DAY 05 <br></br>
            Serengeti National Park
          </div>
          
          Head, after an early breakfast, towards the Serengeti. On adventurous slopes, it goes the Rift Valley up into the wide plains of the Serengeti. It is the heart of a vast ecosystem, whose species-rich animal world is unique in the world. Annually between the three mentioned conservation areas migrate over 1.4 million gnus, almost 300,000 Thomson's gazelles, about 200,000 zebras and several thousand topis with the rainy seasons to the areas with the greener and lush meadows. With about 3 million larger mammals, the Serengeti is the national park with the richest wildlife worldwide. Around two-thirds make up the above-mentioned animal species, furthermore, the park is the home to many other animal species, such as giraffe, buffalo, hyena, elephant or crocodile. Particularly large is the population of feline predators, about 3000 lions, a good 300 cheetahs and an estimated 400-700 leopards have their hunting ground here.
          <div style={{fontWeight: "bold"}}>
            DAY 06 <br></br>
            Serengeti national park 
          </div>

          Wake up early in the morning to start a first game drive in the park. 
          <br></br>
          Come back to the camp, where a strengthening breakfast awaits you. 
          <br></br>
          Continue with a further game drive into the central Serengeti. 
          <br></br>
          Finish an exciting day, and you will reach your tented camp in the heart of the Serengeti, the Seronera area.
          <div style={{fontWeight: "bold"}}>
            DAY 07 <br></br>
            Serengeti National Park – Ngorongoro Crater 
          </div>
          
          Continue this morning with further game drives in the Serengeti, and at noon, you will leave for the Ngorongoro Crater. Both conservation areas are not separated by fences, and on the way, you can observe with some luck some more wildlife. 
          <br></br>
          Spend the night at Rhino Lodge on the upper crater rim, where you can enjoy a spectacular view and a great sunset.
          <div style={{fontWeight: "bold"}}>
            DAY 08 <br></br>
            Ngorongoro Crater 
          </div>

          Relish breakfast and afterwards, it goes onto partly adventurous roads about 600 meters down into the crater. The crater has a diameter of 17-21 kilometres and is the home of a great animal world. Nearly all the biodiversity of the East African savannah has gathered here, only giraffes and a few other animal species for which the rock faces are too steep do not live in the crater. Depending on the season, 15,000 to 25,000 animals are gathering here, thereof more than two-thirds buffaloes, gnus, zebras and gazelles. This large number of grazers also explains why in the crater the largest density of predators in Africa can be found. Beside other predators, more than 100 lions live here in several prides. The chances of watching the "Big Five" lion, elephant, buffalo, rhino and leopard within just a few hours are here particularly good. 
          <br></br>
          Go up, in the afternoon, the steep crater walls and then to Karatu for dinner & overnight.
          <div style={{fontWeight: "bold"}}>
            DAY 09 <br></br>
            Karatu – Arusha/JRO  
          </div>

          Enjoy a delicious breakfast.
          <br></br>
          Travel back to Arusha where you will arrive around midday. You will be dropped off at the Kilimanjaro International Airport or Arusha.
          </p>
        </div>}
        </center>
        <div className="section section-dark text-center" style={{backgroundColor: "green",
          backgroundImage: "url(" + require("assets/img/dessert.png") + ")", backgroundPosition: "center 0px",
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

export default Tours;

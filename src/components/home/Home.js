import React from 'react';
import { Col, Row, Image, Container} from 'react-bootstrap';
import barekstenImg from "../../image/bareksten.png";
import gameImg from "../../image/game.png";
import carbonImg from "../../image/carbon.png";
import flavorImg from "../../image/flavor.png";

export default function Home(props) {
    return (
        <Container id="content">
         <h1 className="home__h1">My Projects...</h1>
          <Row>
              <Col className="home__projects" xs="12" lg="6">
                  <h4 className="home__h4">Carbon Solutions</h4>
                  <p className="home__text">This was our first exam assignment where we got to work with a real customer. The customer wanted us to create a new design expression and a website to represent them.</p>
                  <Image src={carbonImg} className="home__projects--image" alt="zeroimg" fluid/>
            </Col>
            <Col className="home__projects" xs="12" lg="6">
                <h4 className="home__h4">FlavorFood</h4>
                <p className="home__text">This was one of my freelance work I did for a acquaintance. He wanted to start his own restaurant here in Bergen and asked me to make him a logo that represent his food.</p>
                <Image src={flavorImg} className="home__projects--image" alt="bareksteimg" fluid/>
            </Col>
            </Row>

            <Row>
                <Col className="home__projects" xs="12" lg="6">
                    <h4 className="home__h4">Bareksten</h4>
                    <p className="home__text">The exam assingment was about creating a website with html, css and some javascript. We could choose a customer ourselves and I then chose a company from Bergen that makes spirits.</p>
                    <Image src={barekstenImg} className="home__projects--image" alt="bareksteimg" fluid/>
              </Col>
              <Col className="home__projects" xs="12" lg="6">
                  <h4 className="home__h4">Game of Thrones</h4>
                  <p className="home__text">This was also one of our second last exams where we were going to use javascript to create a snakes and ladders game. The game itself should have the game of thrones as a theme.</p>
                  <Image src={gameImg} className="home__projects--image" alt="bareksteimg" fluid/>

              </Col>
              </Row>
        </Container>

    )
}

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
          <Row className="home__projects--row">
              <Col xs="12" lg="6">
                  <h4 className="home__h4">Carbon Solutions</h4>
                  <p className="home__text">This was one of my freelance work I did for a acquaintance. He wanted to start his own company and asked me to make him a logo that did fit with his calisthenics interest.</p>
                  <Image src={carbonImg} className="home__projects--image" alt="zeroimg" fluid/>
            </Col>
            <Col xs="12" lg="6">
                <h4 className="home__h4">FlavorFood</h4>
                <p className="home__text">This was also a exam assignment where we had the opportunity to choose our own customer to redesign their website. I choose Bareksten Spirits that is an alcohol distiller from Bergen. </p>
                <Image src={flavorImg} className="home__projects--image" alt="bareksteimg" fluid/>
            </Col>
            </Row>

            <Row className="home__projects--row">
                <Col xs="12" lg="6">
                    <h4 className="home__h4">Game of Thrones</h4>
                    <p className="home__text">This was one of my freelance work I did for a acquaintance. He wanted to start his own company and asked me to make him a logo that did fit with his calisthenics interest.</p>
                    <Image src={gameImg} className="home__projects--image" alt="bareksteimg" fluid/>
              </Col>
              <Col xs="12" lg="6">
                  <h4 className="home__h4">Bareksten</h4>
                  <p className="home__text">This was also a exam assignment where we had the opportunity to choose our own customer to redesign their website. I choose Bareksten Spirits that is an alcohol distiller from Bergen. </p>
                  <Image src={barekstenImg} className="home__projects--image" alt="bareksteimg" fluid/>
              </Col>
              </Row>
        </Container>

    )
}

import React from 'react';
import { Col, Row, Image, Container} from 'react-bootstrap';
import kortImg from "../../image/kort.png";
import zeroImg from "../../image/zero.png";
import barekstenImg from "../../image/bareksten.png";
import gameImg from "../../image/game.png";

export default function Home(props) {
    return (
        <Container id="content">
          <Row>
            <Col xs="12" lg="6">
                <h1 className="home__h1">My Projects...</h1>
                <h4 className="home__h4">Carbon Solutions</h4>
                <p className="about__text">This was our first exam assignment we got at school where we had our first real customer. There we created a new visual identity for the customer such as a website, logo and business card.</p>
            </Col>

            <Col xs="12" lg="6">
                <Image src={kortImg} className="home__projects--image" alt="kortimg" fluid/>
            </Col>

            <Col xs="12" lg="6">
                <Image src={zeroImg} className="home__projects--image" alt="zeroimg" fluid/>
            </Col>

            <Col xs="12" lg="6">
                <h4 className="home__h4">Zero Gravity</h4>
                <p className="about__text">This was one of my freelance work I did for a acquaintance. He wanted to start his own company and asked me to make him a logo that did fit with his calisthenics interest.</p>
            </Col>

            <Col xs="12" lg="6">
                <h4 className="home__h4">Bareksten</h4>
                <p className="about__text">This was also a exam assignment where we had the opportunity to choose our own customer to redesign their website. I choose Bareksten Spirits that is an alcohol distiller from Bergen. </p>
            </Col>

            <Col xs="12" lg="6">
                <Image src={barekstenImg} className="home__projects--image" alt="bareksteimg" fluid/>
            </Col>

            <Col xs="12" lg="6">
                <Image src={gameImg} className="home__projects--image" alt="gameimg" fluid/>
            </Col>

            <Col xs="12" lg="6">
                <h4 className="home__h4">Game of thrones</h4>
                <p className="about__text">This was a exam assignment where we made a snakes and ladders game written in pure javascript. The theme for the assignment was Game of Thrones.</p>
            </Col>

          </Row>
        </Container>
    )
}

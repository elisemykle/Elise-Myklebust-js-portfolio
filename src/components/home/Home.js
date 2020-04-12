import React from 'react';
import { Col, Row, Image, Container} from 'react-bootstrap';
import kortImg from "../../image/kort.png"
import koppenImg from "../../image/koppen.jpg"
import magasinImg from "../../image/magasin.jpg"
import eliseImg from "../../image/elise.jpg"
import gymImg from "../../image/gym.jpg"
import pizzaImg from "../../image/pizza.jpg"
import appImg from "../../image/app.jpg"
import visaImg from "../../image/visa.jpg"
import flavourImg from "../../image/flavour.png"
import stickerImg from "../../image/sticker.jpg"
import orangeImg from "../../image/orange.png"
import barekstenImg from "../../image/bareksten.jpg"


export default function Home(props) {
    return (
        <Container id="content">
            <h1 className="home__h1">My Projects...</h1>
          <Row>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={kortImg} className="home__kort" alt="kort img" fluid/> <p className="home__centered">centered</p></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={koppenImg} className="home__koppen" alt="koppen img" fluid/></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={magasinImg} className="home__magasin" alt="magasin img" fluid/></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={eliseImg} className="home__elise" alt="elise img" fluid/></Col>
          </Row>
          <Row>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={gymImg} className="home__gym" alt="gym img" fluid/></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={pizzaImg} className="home__pizza" alt="pizza img" fluid/></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={appImg} className="home__app" alt="app img" fluid/></Col>
            <Col className="home__projects"xs={12} md={6} lg={3}><Image src={visaImg} className="home__visa" alt="visa img" fluid/></Col>
          </Row>
          <Row>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={flavourImg} className="home__flavour" alt="flavour img" fluid/></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={stickerImg} className="home__sticker" alt="sticker img" fluid/></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={orangeImg} className="home__orange" alt="orange img" fluid/></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={barekstenImg} className="home__bareksten" alt="bareksten img" fluid/></Col>
          </Row>
        </Container>
    )
}

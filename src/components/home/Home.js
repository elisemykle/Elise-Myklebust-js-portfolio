import React from 'react';
import { Col, Row, Image, Container} from 'react-bootstrap';
import heroImg from "../../image/heroimage.png";
import kortImg from "../../image/kort.png";
import koppenImg from "../../image/koppen.jpg";
import magasinImg from "../../image/magasin.jpg";
import eliseImg from "../../image/elise.jpg";
import gymImg from "../../image/gym.jpg";
import pizzaImg from "../../image/pizza.jpg";
import appImg from "../../image/app.jpg";
import visaImg from "../../image/visa.jpg";
import flavourImg from "../../image/flavour.png";
import stickerImg from "../../image/sticker.jpg";
import orangeImg from "../../image/orange.png";
import barekstenImg from "../../image/bareksten.jpg";


export default function Home(props) {
    return (
        <Container id="content">
            <h1 className="home__h1">My Projects...</h1>
          <Row>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={kortImg} className="home__projects--image" alt="kort img" fluid/><p className="home__centered">Carbon Solutions</p></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={koppenImg} className="home__projects--image" alt="koppen img" fluid/><p className="home__centered">Koppen Industrier</p></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={magasinImg} className="home__projects--image" alt="magasin img" fluid/><p className="home__centered">Fashion magasin</p></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={eliseImg} className="home__projects--image" alt="elise img" fluid/><p className="home__centered">Elise Myklebust</p></Col>
          </Row>
          <Row>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={gymImg} className="home__projects--image" alt="gym img" fluid/><p className="home__centered">Zero Gravity</p></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={pizzaImg} className="home__projects--image" alt="pizza img" fluid/><p className="home__centered">Red Pepper Pizza</p></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={appImg} className="home__projects--image" alt="app img" fluid/><p className="home__centered">Wave app</p></Col>
            <Col className="home__projects"xs={12} md={6} lg={3}><Image src={visaImg} className="home__projects--image" alt="visa img" fluid/><p className="home__centered">Visa checkout</p></Col>
          </Row>
          <Row>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={flavourImg} className="home__projects--image" alt="flavour img" fluid/><p className="home__centered">Flavour</p></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={stickerImg} className="home__projects--image" alt="sticker img" fluid/><p className="home__centered">Cherry sticker</p></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={orangeImg} className="home__projects--image" alt="orange img" fluid/><p className="home__centered">Orange sticker</p></Col>
            <Col className="home__projects" xs={12} md={6} lg={3}><Image src={barekstenImg} className="home__projects--image" alt="bareksten img" fluid/><p className="home__centered">Bareksten</p></Col>
          </Row>
        </Container>
    )
}

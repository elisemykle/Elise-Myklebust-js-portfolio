import React from 'react';
import aboutImg from "../../image/aboutimage.png"
import signatureImg from "../../image/signatureimage.png"
import { Col, Row, Image, Container} from 'react-bootstrap';

export default function About(props) {
    return (
    <Container id="content">
      <Row>
        <Col xs={12} md={6}>
            <h1 className="about__h1">About me...</h1>
            <p className="about__text">Hello, there! I'm a 25-year-old educated graphic designer from Høyskolen Kristiania in Bergen. I am from a small town called Ørsta which is located on Søre Sunnmøre. Currently studying front-end development at Noroff - School of technology and digital media. My expression for design are modern, simplicity and minimalistic design.</p>
            <Image src={signatureImg} className="about__signature--desktop" alt="signature img" fluid/>
        </Col>

        <Col xs={12} md={6}>
            <Image src={aboutImg} className="about__image" alt="about img" fluid/>
        </Col>
      </Row>

      <Row>
          <Col xs={12} md={6}>
            <Image src={signatureImg} className="about__signature--mobile" alt="signature img" fluid/>
          </Col>
      </Row>
    </Container>
    )
}

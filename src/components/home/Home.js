import React from 'react';
import heroImg from "../../image/heroimage2.png"
import {Container, Row, Col, Image} from 'react-bootstrap';

export default function Home(props) {
    return (
        <Container className="home page__home" fluid>
          <Row>
            <Col xs={12}>
            <Image src={heroImg} className="hero__img" alt="hero img"/>
            </Col>
        </Row>
    </Container>
    )
}

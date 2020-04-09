import React from 'react';
import aboutImg from "../../image/aboutimage.png"
import signatureImg from "../../image/signatureimage.png"

export default function About(props) {
    return (
        <div className="about about__page">
            <h1 className="about__h1">ABOUT ME...</h1>
            <p className="about__text">Hello, there! I'm a 25-year-old educated graphic designer from Høyskolen Kristiania in Bergen. I am from a small town called Ørsta which is located on Søre Sunnmøre. Currently studying front-end development at Noroff - School of technology and digital media. My expression for design are modern, simplicity and minimalistic design.</p>
            <img src={aboutImg} alt="about__image"/>
            <img src={signatureImg} alt="signature__image"/>
        </div>
    )
}

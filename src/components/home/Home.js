import React from 'react';
import heroImg from "../../image/heroimage.png"

export default function Home(props) {
    return (
        <div className="home page__home">
            <h1 className="page__h1">Portfolio</h1>
            <img src={heroImg} alt="hero__image"/>
        </div>
    )
}

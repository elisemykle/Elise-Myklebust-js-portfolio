import React from 'react';
import heroImg from "../../image/heroimage.png"

export default function Home(props) {
    return (
        <div className="home page__home">
            <img src={heroImg} alt="hero__image"/>
        </div>
    )
}

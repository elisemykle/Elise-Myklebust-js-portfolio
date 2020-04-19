import React from 'react';

export default function Cv(props) {
    return (
        <div className="container__cv" id="content">
          <div className="page__header">
            <h1 className="cv__h1">Cv - work experiences</h1>
          </div>

          <ul className="cv__timeline">
            <li>
              <div className="timeline__panel">
                <div className="timeline__heading">
                  <h4 className="heading__title">Technical skills</h4>
                    <p className="heading__undertext">Here are a list of my skills</p>
                </div>
                <div className="timeline__body">
                  <p>Graphic design: Illustrator, Photoshop , Indesign, Lightroom, Adobe xd and Wordpress.
                  </p>
                </div>
                <div className="timeline__body">
                  <p>Programming languages: Html, Css, Scss, Javascript and React.</p>
                </div>
              </div>
            </li>

            <li className="timeline__inverted">
              <div className="timeline__panel">
                <div className="timeline__heading">
                  <h4 className="heading__title">Noroff School Of Technology And Digital Media </h4>
                    <p className="heading__undertext">2018 - 2020 Front-end development </p>
                </div>
                <div className="timeline__body">
                  <p>During my time at Noroff Bergen, I had a lot of practical assignments threw the year and this gave me a lot of hands-on experience with Front-end development.</p>
                </div>
              </div>
            </li>

            <li>
              <div className="timeline__panel">
                <div className="timeline__heading">
                  <h4 className="heading__title">Høyskolen Kristiania</h4>
                  <p className="heading__undertext">2015 - 2017 Graphic design</p>
                </div>
                <div className="timeline__body">
                  <p>Throughout my time at Høyskolen Kristiania in Bergen, I was given basic design skills and had the opportunity to explore my creativity. I then found that design is what i'm really passionate about and got to explore and figuring out my own personal design expression.</p>
                </div>
              </div>
            </li>

            <li className="timeline__inverted">
              <div className="timeline__panel">
                <div className="timeline__heading">
                  <h4 className="heading__title">Volda videregående</h4>
                  <p className="heading__undertext">2012 - 2013 General university admissions certification</p>
                </div>
                <div className="timeline__body">
                  <p>During that year, I was able to get subjects in educational programs for study specialization. I was given the choice to choose between several sciences, languages, social sciences and economics that allowed me more freedom to gain more knowledge of what interested me.</p>
                </div>
              </div>
            </li>

            <li>
              <div className="timeline__panel">
                <div className="timeline__heading">
                  <h4 className="heading__title">Borgund videregående skole</h4>
                  <p className="heading__undertext">2011 - 2012 Hairdresser school </p>
                </div>
                <div className="timeline__body">
                  <p>During this one year of school I learned everything from hair, hair treatments, hair diseases and of course haircuts of all varieties.</p>
                </div>
              </div>
            </li>

            <li className="timeline__inverted">
              <div className="timeline__panel">
                <div className="timeline__heading">
                  <h4 className="heading__title">Ørsta Videregående</h4>
                  <p className="heading__undertext">2010 - 2011 Design and craftsmanship</p>
                </div>
                <div className="timeline__body">
                  <p>This is where my real interest in design really started. During this year I've really had the most fun and got to explore and figure out many different creativities such as drawing, sewing, haircut etc. until you find out what we where most passionate for.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

    )
}

import React from 'react';

export default function Cv(props) {
    return (
        <div className="container">
          <h1 className="cv__h1">Cv - work experience</h1>

          <div className="timeline">
            <h2>2013</h2>

            <ul>
              <li>
                <h3>Quit my Job</h3>
                <p>One day, my boss came up to me and asked, "Are you ready, Joe?" Pretty much decided I wasn't ready.</p>
                <time>August 2013</time>
              </li>
              <li>
                <h3>Started New Job</h3>
                <p>Began work at the Button Factory. This was probably the best time of my life. I had a wife, a dog, and a family.</p>
                <time>July 2013</time>
              </li>
              <li>
                <h3>Changed my name to Joe</h3>
                <p>I was just sick of Josh</p>
                <time>June 2013</time>
              </li>
              <li>
                <h3>Moved to Iowa</h3>
                <p>I moved to <a href="cv.js">Ames, Iowa</a> and settled down into my new life.</p>
                <time>February 2013</time>
              </li>
            </ul>

            <h2>2012</h2>
            <ul>
              <li>
                <h3>Graduated College</h3>
                <p>It only took, like, two years.</p>
                <time>December 2012</time>
              </li>
              <li>
                <h3>Graduated Community College</h3>
                <p>Studying Aerospace Engineering.</p>
                <time>May 2012</time>
              </li>
            </ul>
          </div>
        </div>

    )
}

import React from 'react';
import './App.css';
import {Row, Col, Image}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import mypic from './images/me.png';
import linkedinlogo from './images/linkedin-icon.png';
import resumeIcon from './images/resume-icon.png';
import resume from './resume.pdf';


function App() {
  return (
    <div className="App bg-dark text-white ">
        <Row>
          <Col><Image src={mypic} className="myPicture"></Image></Col>
          <Col>
              <h1>Peyton Howell</h1>
              <h3>About Me</h3>
              <p>Software Engineer | CS @ Georgia Tech, 2021</p>
              <p>Interested in software engineering opportunities</p>
              <div className="horizontalMargin">
                <a href="https://www.linkedin.com/in/peytonhowell/" className="horizontalMargin"><Image src={linkedinlogo} className="logo" aria-label="LinkedIn"></Image></a>
                <a href={resume} className="horizontalMargin"><Image src={resumeIcon} className="logo" aria-label="Resume"></Image> </a>        
              </div>
          </Col>
        </Row>
    </div>
  );
}

export default App;

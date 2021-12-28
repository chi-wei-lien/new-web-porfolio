import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import '../../style/index/Footer.css';

var socialWordCount = 0;
var speed = 100;
var socialMedia = 'My Social Media.';
var launchedSocialType = false;
var socialElement;

function socialTypeWriter() {
  if (socialWordCount < socialMedia.length) {
    socialElement = document.getElementById("my-social-media")
    if (socialElement !== null) {
      socialElement.innerHTML += socialMedia.charAt(socialWordCount);
      socialWordCount++;
      setTimeout(socialTypeWriter, speed);
    }
  }
}

const Footer = () => {
  React.useEffect(() => {
    window.addEventListener('scroll', (event) => {
      var currentScrollingLocation = document.documentElement.scrollTop;
      if(currentScrollingLocation > 400 && !launchedSocialType){
        socialTypeWriter();
        launchedSocialType = true;
      }
    });
  }, []);

  return (
    <Row className="footer">
      <Container fluid>
        <Row>
          <Col md="4" />
          <Col md="4">
            <h1 id="my-social-media" />
            <a href="https://github.com/chi-wei-lien" title="github" target="_blank">
              <img id="github" src="/images/index/logo/github.png"/>
            </a>
            <a href="https://www.instagram.com/willy_3124/" title="instagram" target="_blank">
              <img id="instagram" src="/images/index/logo/instagram.png"/>
            </a>
            <p>Have a wonderful day.</p>
          </Col>
          <Col md="4" />
        </Row>
      </Container>
    </Row>
  );
}

export default Footer;
import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Project from './Project';

import '../../style/index/SelfPortrait.css';

class Projects extends Component {
  render() {
    return (
      <Row>
        <div className="projects">
          <h1 id="my-project"/>
          <Container fluid>
            <Row className="project-gallery">
              <Col md="2" />
              <Col md="4">
                <Project 
                  propsSrc="https://github.com/chi-wei-lien/BobTheTraveler"
                  propsName="Bob The Traveler"
                  propsPicSrc="/images/index/projects/bob-project.png"
                />
              </Col>
              <Col md="4">
                <Project 
                    propsSrc="https://iepmap.herokuapp.com/"
                    propsName="Tips"
                    propsPicSrc="/images/index/projects/tips.png"
                />
              </Col>
              <Col md="2" />
            </Row>
          </Container>
        </div>
      </Row>
    );
  }
}

export default Projects;
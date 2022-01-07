import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

import Blog from './blog';

import '../../style/index/SelfPortrait.css';

var i = 0;
var txt = 'My Blogs.';
var speed = 100;
var launchedType = false;
var titleElement;

function typeWriter() {
  if (i < txt.length) {
    titleElement = document.getElementById("my-project");
    if (titleElement !== null) {
      titleElement.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}

const Projects = () => {
  let blogs: object[] = [];

  // React.useEffect(() => {
  //   window.addEventListener('scroll', function (event) {
  //     var currentScrollingLocation = document.documentElement.scrollTop;
  //     if (currentScrollingLocation > 200 && !launchedType) {
  //       typeWriter();
  //       launchedType = true;
  //     }
  //   }, false);
  // }, []);

  let apiAddress = "https://test-web-portfolio.herokuapp.com/api/blogs";

  if (process.env.REACT_APP_ENV?.localeCompare("dev") == 0) {
    apiAddress = "http://localhost:5000/api/blogs";
  }

  axios.get(apiAddress, {
    withCredentials: true
  })
    .then(res => {
      for (let i = 0; i < res.data.length; i++) {
        blogs.push(res.data[i]);
      }
      // window.location.reload();
    })

  return (
    <Row>
      <div className="projects">
        <h1 id="my-project" />
        <Container fluid>
          <Row className="project-gallery">
            <Col md="2" />
            <Col md="8">
              <ol>
                {blogs.map((blog) => {
                  <li>{blog}</li>
                })}
              </ol>
            </Col>
            <Col md="2" />
          </Row>
        </Container>
      </div>
    </Row>
  );
}

export default Projects;
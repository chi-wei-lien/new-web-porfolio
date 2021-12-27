import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import '../../style/index/SelfPortrait.css';

class SelfPortrait extends Component {
  render() {
    return (
      <Col className="imageBG">
        <Container>
          <img id="me" src="/images/index/me.png" />
        </Container>
      </Col>
    );
  }
}

export default SelfPortrait;
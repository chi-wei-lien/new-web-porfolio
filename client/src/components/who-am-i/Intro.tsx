import { Component } from "react";
import { Row, Container, Col } from 'react-bootstrap';

import '../../style/who-am-i/intro.css';

class Intro extends Component {
  render() {
    return (
      <Col className="codeBG">
        <Container className="intro">
          <h1>Yea... I'm Willy</h1>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;
            I'm Wilson, a college freshman interested in making videos on Youtube and cybersecurity. 
            I'm trying to upload a video every week that is related to cybersecurity to help people 
            get started with this field. To be honest, I'm not at all an expert in this field, but I 
            enjoy learning while sharing my knowledge! If you think I said anything wrong in my videos 
            or blogs feel free to comment down below or DM me!</p>
        </Container>
      </Col>
    )
  }
}

export default Intro;
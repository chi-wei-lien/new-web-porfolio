import React, { Component } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

import '../../style/index/Project.css';
import '../../style/blogs/blogs.css';


interface Props {
  propsContent: string,
  propsName: string,
  propsPicSrc: string
}

interface State {
  stateContent: string,
  stateName: string,
  statePicSrc: string
}

class Blog extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      stateName: props.propsName,
      stateContent: props.propsContent,
      statePicSrc: props.propsPicSrc
    }
  }

  render() {
    return (
      <>
      <Row className="project-gallery">
        <Col md={4} />
        <Col md={4} >
          <Card className={"blog-card"}>
            <Card.Img variant="top" src={this.state.statePicSrc} />
            <Card.Body>
              <Card.Title>{this.state.stateName}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} />
      </Row>
        
      </>
    );
  }
}

export default Blog;
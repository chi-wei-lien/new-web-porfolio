import React, { Component } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

import '../../style/index/Project.css';

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
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{this.state.stateName}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

      </>
    );
  }
}

export default Blog;
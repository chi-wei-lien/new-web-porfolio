import React, { Component } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import axios from "axios";

import '../../style/index/Project.css';
import '../../style/blogs/blogs.css';


interface Props {
  propsContent: string,
  propsName: string,
  propsPicSrc: string,
  propsID: string,
  propsAdmin: boolean,
  propsPublished: boolean
}

interface State {
  stateContent: string,
  stateName: string,
  statePicSrc: string,
  stateID: string,
  stateAdmin: boolean,
  statePublished: boolean
}

class Blog extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      stateName: props.propsName,
      stateContent: props.propsContent,
      statePicSrc: props.propsPicSrc,
      stateID: props.propsID,
      stateAdmin: props.propsAdmin,
      statePublished: props.propsPublished
    }
    this.deleteBlog = this.deleteBlog.bind(this);
    this.publishBlog = this.publishBlog.bind(this);
    this.unPublishBlog = this.unPublishBlog.bind(this);
  }

  deleteBlog() {
    let deleteApiAddress = "https://test-web-portfolio.herokuapp.com/api/blogs/delete/" + this.state.stateID;

    if (process.env.REACT_APP_ENV?.localeCompare("dev") == 0) {
      deleteApiAddress = "http://localhost:5000/api/blogs/delete/" + this.state.stateID;
    }

    let token = {
      token: localStorage.getItem('token')
    }

    axios.post(deleteApiAddress, token, {
      withCredentials: true
    })
      .then(res => {
        window.location.reload();
      })
  }

  publishBlog() {
    let publishApiAddress = "https://test-web-portfolio.herokuapp.com/api/blogs/publish/" + this.state.stateID;

    if (process.env.REACT_APP_ENV?.localeCompare("dev") == 0) {
      publishApiAddress = "http://localhost:5000/api/blogs/publish/" + this.state.stateID;
    }

    let token = {
      token: localStorage.getItem('token')
    }

    axios.post(publishApiAddress, token, {
      withCredentials: true
    })
      .then(res => {
        window.location.reload();
      })
  }

  unPublishBlog() {
    let publishApiAddress = "https://test-web-portfolio.herokuapp.com/api/blogs/unpublish/" + this.state.stateID;

    if (process.env.REACT_APP_ENV?.localeCompare("dev") == 0) {
      publishApiAddress = "http://localhost:5000/api/blogs/unpublish/" + this.state.stateID;
    }

    let token = {
      token: localStorage.getItem('token')
    }

    axios.post(publishApiAddress, token, {
      withCredentials: true
    })
      .then(res => {
        window.location.reload();
      })
  }

  render() {
    let editButton;
    let deleteButton;
    let publishButton;
    if(this.state.stateAdmin == true) {
      editButton = <Button variant="warning" href={'/edit/' + this.state.stateID} style={{marginLeft: "5px"}}>Edit</Button>;
      deleteButton = <Button variant="secondary" onClick={this.deleteBlog} style={{marginLeft: "5px"}}>Delete</Button>;
      if (!this.state.statePublished) {
        publishButton = <Button variant="info" onClick={this.publishBlog} style={{marginLeft: "5px"}}>Publish</Button>;
      } else {
        publishButton = <Button variant="info" onClick={this.unPublishBlog} style={{marginLeft: "5px"}}>Unpublish</Button>;
      }
    }
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
              <Button variant="primary" href={"/blog/" + this.state.stateID}>Read more</Button>
              {editButton}
              {deleteButton}
              {publishButton}
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
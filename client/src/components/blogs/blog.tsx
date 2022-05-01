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
  propsPublished: boolean,
  propsPreview: string
}

interface State {
  stateContent: string,
  stateName: string,
  statePicSrc: string,
  stateID: string,
  stateAdmin: boolean,
  statePublished: boolean
  statePreview: string
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
      statePublished: props.propsPublished,
      statePreview: props.propsPreview
    }
    this.deleteBlog = this.deleteBlog.bind(this);
    this.publishBlog = this.publishBlog.bind(this);
    this.unPublishBlog = this.unPublishBlog.bind(this);
  }

  deleteBlog() {
    let deleteConfirm: boolean = window.confirm("Are you sure you want to delete this blog? You cannot redo this!");

    if (deleteConfirm) {
      let deleteApiAddress = "https://chi-wei-lien.herokuapp.com/api/blogs/delete/" + this.state.stateID;
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
  }

  publishBlog() {
    let publishApiAddress = "https://chi-wei-lien.herokuapp.com/api/blogs/publish/" + this.state.stateID;

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
    let publishApiAddress = "https://chi-wei-lien.herokuapp.com/api/blogs/unpublish/" + this.state.stateID;

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
      <a href={"/blog/" + this.state.stateID}>{this.state.stateName}</a>
      {editButton}
      {deleteButton}
      {publishButton}
      <br></br>
      </>
    );
  }
}

export default Blog;
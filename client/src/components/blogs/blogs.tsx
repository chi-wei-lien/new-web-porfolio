import React, {Component, useState} from 'react';
import { Row, Container, Button } from 'react-bootstrap';
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
    titleElement = document.getElementById("my-blogs");
    if (titleElement !== null) {
      titleElement.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}

interface DataPlaceHolder {
  propsContent: string,
  propsName: string,
  propsPicSrc: string,
  propsID: string,
  propsPublished: boolean,
  propsPreview: string
}

interface Props {
  propsAdmin: boolean
}

interface State {
  stateAdmin: boolean,
  stateBlog: Array<DataPlaceHolder>
}

class Blogs extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      stateAdmin: props.propsAdmin,
      stateBlog: []
    }
  }

  // Seems like there is a better way of doing this
  componentWillMount() {
    this.getBlogs();
    document.addEventListener('scroll', () => {
      var currentScrollingLocation = document.documentElement.scrollTop;
      if (currentScrollingLocation > 200 && !launchedType) {
        typeWriter();
        launchedType = true;
      }
    });
  }

  getBlogs = () => {
    let apiAddress = "https://chi-wei-lien.herokuapp.com/api/blogs";

    if (process.env.REACT_APP_ENV?.localeCompare("dev") == 0) {
      apiAddress = "http://localhost:5000/api/blogs";
    }

    if (this.state.stateAdmin) {
      apiAddress += "/admin"
    }

    axios.get(apiAddress, {
      withCredentials: true
    })
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          const newData = {
            propsContent: res.data[i].content,
            propsName: res.data[i].title,
            propsPicSrc: res.data[i].pic,
            propsID: res.data[i]._id,
            propsPublished: res.data[i].published,
            propsPreview: res.data[i].preview
          }

          this.setState({
            stateBlog: this.state.stateBlog.concat(newData)
          })
        }
      })
  }

  render() {
    let createBlogButton;
    if (this.state.stateAdmin) {
      createBlogButton = <Button href={"/create_blog"} style={{marginBottom: "10px"}}>Create New Blog</Button>
    }
    return (
      <Container fluid>
        {createBlogButton}
        {this.state.stateBlog.map((blog) => {
          return <Blog
                    propsContent={blog.propsContent}
                    propsName={blog.propsName}
                    propsPicSrc={blog.propsPicSrc}
                    propsID={blog.propsID}
                    propsAdmin={this.state.stateAdmin}
                    propsPublished={blog.propsPublished}
                    propsPreview={blog.propsPreview}
                  >
                  </Blog>
        })}
      </Container>
    );
  }
  
}

export default Blogs;


  // let blogs: any[] = [];

  
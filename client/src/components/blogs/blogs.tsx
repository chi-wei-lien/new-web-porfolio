import React, {Component, useState} from 'react';
import { Row, Col, Container, CardGroup } from 'react-bootstrap';
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

interface DataPlaceHolder {
  propsContent: string,
  propsName: string,
  propsPicSrc: string,
  propsID: string
}

interface Props {
  propBlog: Array<DataPlaceHolder>
}

interface State {
  stateBlog: Array<DataPlaceHolder>,
}

class Blogs extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      stateBlog: [],
    }
  }

  // Seems like there is a better way of doing this
  componentWillMount() {
    this.getBlogs();
  }

  getBlogs = () => {
    let apiAddress = "https://test-web-portfolio.herokuapp.com/api/blogs";

    if (process.env.REACT_APP_ENV?.localeCompare("dev") == 0) {
      apiAddress = "http://localhost:5000/api/blogs";
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
            propsID: res.data[i]._id
          }

          this.setState({
            stateBlog: this.state.stateBlog.concat(newData)
          })
        }
      })
  }

  render() {
    return (
      <Row>
        <div className="projects">
          <h1 id="my-project" />
          <Container fluid>
            {/* <Row className="project-gallery"> */}
            {this.state.stateBlog.map((blog) => {
              return <Blog propsContent={blog.propsContent} propsName={blog.propsName} propsPicSrc={blog.propsPicSrc} propsID={blog.propsID} ></Blog>
            })}
            {/* </Row> */}
          </Container>
        </div>
      </Row>
    );
  }
  
}

export default Blogs;


  // let blogs: any[] = [];

  // React.useEffect(() => {
  //   window.addEventListener('scroll', function (event) {
  //     var currentScrollingLocation = document.documentElement.scrollTop;
  //     if (currentScrollingLocation > 200 && !launchedType) {
  //       typeWriter();
  //       launchedType = true;
  //     }
  //   }, false);
  // }, []);
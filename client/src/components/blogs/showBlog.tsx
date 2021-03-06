import React, { useState } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import Footer from '../footer/footer';
import axios from 'axios';
import MyNavbar from '../navbar/navbar';

import '../../style/blogs/showBlog.css';
//import hljs from 'highlight.js/lib/core';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//import languagec from 'highlight.js/lib/languages/cpp';


const ShowBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [pic, setPic] = useState('');

    let id = window.location.pathname;
    id = id.slice(id.indexOf('blog/') + 5);
    let apiAddress = "https://chi-wei-lien.herokuapp.com/api/blogs/" + id;

    if (process.env.REACT_APP_ENV?.localeCompare("dev") == 0) {
      apiAddress = "http://localhost:5000/api/blogs/" + id;
    }

    axios.get(apiAddress, {
      withCredentials: true
    })
      .then(res => {
        setTitle(res.data[0].title);
        setContent(res.data[0].content);
        setPic(res.data[0].pic);
      })
    //hljs.registerLanguage('language-c', languagec);
    hljs.highlightAll();
    /*
    updateCodeSyntaxHighlighting = () => {
      hljs.registerLanguage('language-c', languagec);
      console.log("hi");
      document.querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block as HTMLElement);
        console.log("hi");
      });

    };
    componentDidMount(){
      this.updateCodeSyntaxHighlighting()
    }
    */
    return (
      <>
        <Container fluid>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <MyNavbar />
              <img src={pic} className="blog-img"></img>
                <h1 className='blog-title'>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              
            </Col>
            <Col md={3}></Col>
          </Row>
        <Footer></Footer>
        </Container>
      </>
    )
}

export default ShowBlog;
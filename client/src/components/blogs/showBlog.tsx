import React, { useState } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import Footer from '../footer/newfooter';
import axios from 'axios';
import MyNavbar from '../navbar/navbar';

import '../../style/blogs/showBlog.css';

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

    return (
        <>
          <MyNavbar />
          <Container fluid className='blog-canvas'>
            <Row>
              <Col md={3}/>
              <Col md={6}>
                <img src={pic} className="blog-img"></img>
                <h1 className='blog-title'>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </Col>
              <Col md={3}/>
            </Row>
            
          </Container>
          <Footer />
        </>
    )
}

export default ShowBlog;
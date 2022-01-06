import React from 'react';
import logo from './logo.svg';

//import custom react element
import MyNavbar from '../navbar/navbar';
import axios from "axios";


import { Container } from 'react-bootstrap';

import '../../style/index/index.css';

//import boostrap css
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Blogedit = () => {
  const checkAccess = async () => {
    const token = localStorage.getItem('token');

    axios.post(`http://localhost:5000/api/login/check`, { token }, {
      withCredentials: true
    })
      .then(res => {
        if (res.data.success) {
          return true;
        }
      })
    return false;
  }

  return (
    <>
      <MyNavbar />
      <Container fluid>
        <p>hi</p>
      </Container>
    </>
  );
}

export default Blogedit;
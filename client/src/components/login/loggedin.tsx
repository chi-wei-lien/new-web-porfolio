import { useState } from "react";
import firebase from "../../config/firebase-config";
import socialMediaAuth from "../../service/auth";
import { Row, Container, Col } from 'react-bootstrap';
import GithubButton from 'react-github-login-button';
import axios from "axios";

import { githubProvider } from "../../service/authMethods";

import '../../style/login/login.css';

const Loggedin = () => {
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    window.location.reload();
  }

  return (
    <Col className="codeBG">
      <Container className="login">
        <Container className="login-button-container">
          <h1>You are logged in</h1>
          <p>Currently there is nothing you can do after you login.<br />But soon there will be :)</p>
          <GithubButton
            className="login-button"
            label="logout"
            onClick={() => logout()}
          />
        </Container>
      </Container>
    </Col>
  )
}

export default Loggedin;
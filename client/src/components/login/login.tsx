import { useState } from "react";
import firebase from "../../config/firebase-config";
import socialMediaAuth from "../../service/auth";
import { Row, Container, Col } from 'react-bootstrap';
import GithubButton from 'react-github-login-button';
import axios from "axios";

import { githubProvider } from "../../service/authMethods";

import '../../style/login/login.css';

const Login = () => {
  const login = async (provider: firebase.auth.GithubAuthProvider) => {
    const res = await socialMediaAuth(provider)
    if (res.email) {
      const user = {
        email: res.email
      }

      // axios.post(`https://test-web-portfolio.herokuapp.com/api/login`, { user }, {
      //   withCredentials: true
      // })
      //   .then(res => {
      //     console.log(res);
      //     console.log(res.data);
      //   })

      axios.post(`http://localhost:5000/api/login`, { user }, {
        withCredentials: true
      })
        .then(res => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', user.email);
          localStorage.setItem('admin', res.data.admin);
          window.location.reload();
        })
    }
  }

  return (
    <Col className="codeBG">
      <Container className="login">
        <Container className="login-button-container">
          <h1>Login</h1>
          <p>Currently there is nothing you can do after you login.<br />But soon there will be :)</p>
          <GithubButton className="login-button"
            onClick={() => login(githubProvider)}
          />
        </Container>
      </Container>
    </Col>
  )
}

export default Login;
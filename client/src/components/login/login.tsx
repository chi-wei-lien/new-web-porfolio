import { Component } from "react";
import firebase from "../../config/firebase-config";
import socialMediaAuth from "../../service/auth";
import { Row, Container, Col } from 'react-bootstrap';
import GithubButton from 'react-github-login-button';

import { githubProvider } from "../../service/authMethods";

import '../../style/login/login.css';


const login = async (provider: firebase.auth.GithubAuthProvider) => {
  const res = await socialMediaAuth(provider);
  console.log(res);
}

class Login extends Component {
  render() {
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
}

export default Login;
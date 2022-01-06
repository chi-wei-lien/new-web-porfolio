import { Container, Col } from 'react-bootstrap';

import '../../style/login/login.css';

const NoAccess = () => {
  return (
    <Col className="codeBG">
      <Container className="login">
        <Container className="login-button-container">
          <h1>Oops!</h1>
          <p>Hey! You are not suppose to be here :(</p>
        </Container>
      </Container>
    </Col>
  )
}

export default NoAccess;
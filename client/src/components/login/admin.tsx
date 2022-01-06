import { Container, Col, Button } from 'react-bootstrap';
import GithubButton from 'react-github-login-button';

import '../../style/login/login.css';

const Admin = () => {
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
          <h1>Welcome</h1>
          <Button className="blog-edit" href="/blogedit">Edit blog</Button>
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

export default Admin;
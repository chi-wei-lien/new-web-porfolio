//import custom react element
import MyNavbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import axios from 'axios';

import { Row, Container, Col } from 'react-bootstrap';

import './style/index/index.css';

//import boostrap css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  localStorage.removeItem('admin');
  window.location.reload();
}

const check = () => {
  if (localStorage.getItem('token')) {
    let token = {
      token: localStorage.getItem('token')
    }
    let checkApiAddress = "https://chi-wei-lien.herokuapp.com/api/login/check";

    if (process.env.REACT_APP_ENV?.localeCompare("dev") == 0) {
      checkApiAddress = "http://localhost:5000/api/login/check";
    }

    axios.post(checkApiAddress, token, {
      withCredentials: true
    })
      .catch(err => {
        logout();
      }); 
  }
  
}

function App() {
  check();

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <MyNavbar />
            <img src="/images/index/me.png" className="self-portrait"></img>
            <div className="intro-new">
              <h3>I'm Willy</h3>
              <p> I'm a sophomore studying <mark>CS at Purdue University</mark>
              <br></br>In my free time, I enjoy: </p>
              <ul>
                <li>🎬 making YouTube videos</li>
                <li>👾 study different cyberattacks</li>
                <li>♠️ perform card tricks</li>
              </ul>
              <h3>Get In Touch</h3>
              <ul>
                <li><mark><a href="https://www.youtube.com/channel/UCZMPBxz5CQ46l0fO0K1duRQ">YouTube:</a></mark> Currently, I'm still able to read all the comments on YouTube. 
                So feel free to leave a comment!</li>
                <li><mark><a href="https://www.instagram.com/willy_3124/">Instagram:</a></mark> tbh I'm not that active on Instagram</li>
                <li><mark><a href="https://github.com/chi-wei-lien">GitHub:</a></mark> If you think there is an error in my code don't hesitate to point it out!</li>
              </ul>
            </div>
            
          </Col>
          <Col md={3}></Col>
        </Row>
      <Footer></Footer>
      </Container>
    </>
  );
}

export default App;

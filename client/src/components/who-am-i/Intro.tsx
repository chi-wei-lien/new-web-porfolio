import { Component } from "react";
import { Row, Container, Col } from 'react-bootstrap';

import '../../style/who-am-i/intro.css';

class Intro extends Component {
  render() {
    return (
      <Col className="codeBG">
        <Container className="intro">
          <h1>Yea... I'm Willy</h1>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;I remember when I first entered high school, our homeroom teacher told us to introduce ourselves on stage, and in my introduction, I remarked that my dream is to become a hacker. As I learned my first attack without using any hacking tool, I noticed that I have stepped out my first step. Understanding how computers manipulate data, how software correlates with hardware, how the network is built are fascinating, but moving a step forward, trying to break the rules that have been set up is even more interesting. I want to clarify once again. I'm dumb, and I learn things slowly, and I know how little progress I have made till now. But even if I have only finished one percent of my hacker journey, I know that I would never give up. So, for those who felt depressed and think that their dreams would never come true. Cheer up and believe yourself. Life is tough, but being depressed would not help make it better. If things are already so terrible then why not be happy and try your best to make your life more meaningful? This website is designed to not only share cybersecurity knowledge but also share how I view life and how I face different problems.</p>
        </Container>
      </Col>
    )
  }
}

export default Intro;
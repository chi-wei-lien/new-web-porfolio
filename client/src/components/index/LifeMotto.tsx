import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Code from './Code';
import '../../style/index/LifeMotto.css'

class LifeMotto extends Component {
  render() {
    return (
      <Col className="codeBG">
        <Container className="motto">
          <div className="inline">
            <Code propsColor="#a3a3a3" propsCode="//life motto"></Code>
          </div>
          <div className="inline">
            <Code propsColor="#80ddff" propsCode="wilson&nbsp;"></Code>
            <Code propsColor="#e3e3e3" propsCode="=&nbsp;"></Code>
            <Code propsColor="#a3a3a3" propsCode="Dream()"></Code>
          </div>
          <div className="inline">
            <Code propsColor="#ff96de" propsCode="while&nbsp;"></Code>
            <Code propsColor="#e3e3e3" propsCode="wilson."></Code>
            <Code propsColor="#ff8787" propsCode="success&nbsp;"></Code>
            <Code propsColor="#e3e3e3" propsCode="==&nbsp;"></Code>
            <Code propsColor="#e3e3e3" propsCode="false"></Code>
          </div>
          <div className="inline">
            <Code propsColor="#ff96de" propsCode="&nbsp;&nbsp;&nbsp;&nbsp;try:"></Code>
          </div>
          <div className="inline">
            <Code propsColor="#e3e3e3" propsCode="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wilson."></Code>
            <Code propsColor="#87a7ff" propsCode="work_hard()"></Code>
          </div>
          <div className="inline">
            <Code propsColor="#ff96de" propsCode="&nbsp;&nbsp;&nbsp;&nbsp;except:"></Code>
          </div>
          <div className="inline">
            <Code propsColor="#ff96de" propsCode="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wilson."></Code>
            <Code propsColor="#87a7ff" propsCode="start_again()"></Code>
          </div>
          <div className="inline">
            <Code propsColor="#80ddff" propsCode="print"></Code>
            <Code propsColor="#e3e3e3" propsCode="("></Code>
            <Code propsColor="#80ddff" propsCode="type"></Code>
            <Code propsColor="#e3e3e3" propsCode="("></Code>
            <Code propsColor="#e3e3e3" propsCode="wilson."></Code>
            <Code propsColor="#ff8787" propsCode="success"></Code>
            <Code propsColor="#e3e3e3" propsCode="))"></Code>
          </div>
          <div className="inline">
            <Code propsColor="#a3a3a3" propsCode="//output: class <'undefined'>"></Code>
          </div>
        </Container>
      </Col>
    );
  }
}

export default LifeMotto;
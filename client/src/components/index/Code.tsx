import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import '../../style/index/LifeMotto.css'

interface Props {
  propsColor: string;
  propsCode: string;
}

interface State {
  stateColor: string;
  stateCode: string;
}

class Code extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      stateColor: props.propsColor,
      stateCode: props.propsCode
    }
  }

  render() {
    return (
      <p style={{float: "left", color: this.state.stateColor}}> 
        {this.state.stateCode}
      </p>
  );
  }
}

export default Code;
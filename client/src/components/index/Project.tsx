import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import '../../style/index/Project.css';

interface Props {
  propsSrc: string,
  propsName: string,
  propsPicSrc: string
}

interface State {
  stateSrc: string,
  stateName: string,
  statePicSrc: string
}

class Projects extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      stateName: props.propsName,
      stateSrc: props.propsSrc,
      statePicSrc: props.propsPicSrc
    }
  }

  render() {
    return (
      <div className="project">
        <a href={this.state.stateSrc} title={this.state.stateName} target="_blank">
          <img src={this.state.statePicSrc}></img>
          <h3>{this.state.stateName}</h3>
        </a>
      </div>
    );
  }
}

export default Projects;
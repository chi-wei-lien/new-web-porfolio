//import custom react element
import MyNavbar from '../navbar/navbar';
import SelfPortrait from '../index/SelfPortrait';
import ToolBar from '../index/ToolBar';
import Projects from '../index/Projects';
import Footer from '../footer/newfooter';
import NoAccess from './noAccess';

import { Row, Container } from 'react-bootstrap';

import '../../style/index/index.css';

//import boostrap css
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Error = () => {
  return (
    <>
      <MyNavbar />
      <Container fluid>
        <Row>
          <NoAccess />
          <SelfPortrait />
        </Row>
        <ToolBar />
        <Projects />
        <Footer />
      </Container>
    </>
  );
}

export default Error;
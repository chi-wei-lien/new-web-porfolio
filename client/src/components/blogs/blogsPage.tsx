//import custom react element
import MyNavbar from '../navbar/navbar';
import SelfPortrait from '../index/SelfPortrait';
import ToolBar from '../index/ToolBar';
import Footer from '../footer/newfooter';
import Blogs from './blogs';

import { Row, Container, Col } from 'react-bootstrap';

import '../../style/index/index.css';

//import boostrap css
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const BlogPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <MyNavbar />
            {/* propBlog will be empty when called */}
            <Blogs propsAdmin={ false }/>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
}

export default BlogPage;
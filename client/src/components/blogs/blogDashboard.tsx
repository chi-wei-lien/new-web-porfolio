//import custom react element
import MyNavbar from '../navbar/navbar';
import Footer from '../footer/footer';
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
            <Blogs propsAdmin={ true } />
          </Col>
          <Col md={3}></Col>
        </Row>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default BlogPage;
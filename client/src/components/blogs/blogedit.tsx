//import custom react element
import MyNavbar from '../navbar/navbar';
import axios from "axios";
import Error from '../error/error';

import { Container } from 'react-bootstrap';

import '../../style/index/index.css';

//import boostrap css
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Blogedit = () => {
  /**
   * If the user is not one of the admin, it will kick hime
   * to the no access page
   */
  if (localStorage.getItem('admin')?.localeCompare("true") != 0) {
    return (
      <Error />
    );
  }

  return (
    <>
      <MyNavbar />
      <Container fluid>
        <p>hi</p>
      </Container>
    </>
  );
}

export default Blogedit;
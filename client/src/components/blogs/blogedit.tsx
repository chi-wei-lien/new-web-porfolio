//import custom react element
import MyNavbar from '../navbar/navbar';
import axios from "axios";
import Error from '../error/error';

import { Container, Form, Button } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';

import '../../style/blogs/blogedit.css';

//import boostrap css
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const check = () => {
  let token = {
    token: localStorage.getItem('token')
  }
  let checkApiAddress = "https://test-web-portfolio.herokuapp.com/api/login/check";

  if (process.env.REACT_APP_ENV?.localeCompare("dev") == 0) {
    checkApiAddress = "http://localhost:5000/api/login/check";
  }

  axios.post(checkApiAddress, token, {
    withCredentials: true
  })
    .catch(err => {
      document.location.href="/error"
    });
}

const BlogEdit = () => {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  check();

  let apiAddress = "https://test-web-portfolio.herokuapp.com/api/blogs/create";

  if (process.env.REACT_APP_ENV?.localeCompare("dev") == 0) {
    apiAddress = "http://localhost:5000/api/blogs/create";
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let blog = {
      blogTitle: title,
      blogContent: content,
    }
    console.log(blog)
    await axios.post(apiAddress, blog, {
      withCredentials: true
    })
      .then(res => {
        
      })
    
  }

  const handleChange = (content: string) => {
    setContent(content);
  }

  /**
   * If the user is not one of the admin, it will kick him
   * to the no access page
   */
  // if (localStorage.getItem('admin')?.localeCompare("true") != 0) {
  //   return (
  //     <Error />
  //   );
  // }

  
  return (
    <>
      <MyNavbar />
        <Container>
        <Form onSubmit={handleSubmit} className="editor-container">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Journal Name</Form.Label>
            <Form.Control 
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Journal Name" />
            <Form.Text className="text-muted">
              Name that will be displayed to the readers
            </Form.Text>
          </Form.Group>
          <Editor
            apiKey="83y8lsfnuk86q6vm9llhy54rxn9c9oa2z8ttovkq59fix13d"
            onEditorChange={handleChange}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default BlogEdit;
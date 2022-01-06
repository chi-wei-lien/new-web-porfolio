//import custom react element
import MyNavbar from '../navbar/navbar';
import axios from "axios";
import Error from '../error/error';

import { Container } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';

import '../../style/blogs/blogedit.css';

//import boostrap css
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Blogedit = () => {
  const [content, setContent] = useState<string>('');

  const handleSubmit = (event: any) => {
    console.log(content);
    event.preventDefault();
  }

  const handleChange = (content: string) => {
    setContent(content);
  }

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
      <form onSubmit={handleSubmit} className="editor-container">
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
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Blogedit;
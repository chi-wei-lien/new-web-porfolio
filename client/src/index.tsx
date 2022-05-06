import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './components/login/login-page';
import Blogedit from './components/blogs/blogCreate';
import Blogs from './components/blogs/blogsPage';
import ShowBlog from './components/blogs/showBlog';
import EditBlog from './components/blogs/blogEdit';
import BlogDashboard from './components/blogs/blogDashboard';
import reportWebVitals from './reportWebVitals';
import Error from './components/error/error'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/create_blog" element={<Blogedit />} />
        <Route path="/blog/:id" element={<ShowBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/blog_dashboard" element={<BlogDashboard />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

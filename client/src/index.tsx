import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WhoAml from './components/who-am-i/who';
import LoginPage from './components/login/login-page';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/who_am_i" element={<WhoAml />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

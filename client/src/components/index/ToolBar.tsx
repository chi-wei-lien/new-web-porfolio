import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import '../../style/index/ToolBar.css';

var favoriteWordCount = 0;
var caption = '<-- my favorite apps';
var launchedCaptionType = false;
var captionSpeed = 50;
var captionElement;

function captionTypeWriter() {
  if (favoriteWordCount < caption.length) {
    captionElement = document.getElementById("caption");
    if (captionElement !== null) {
      console.log('hi');
      captionElement.innerHTML += caption.charAt(favoriteWordCount);
      favoriteWordCount++;
      setTimeout(captionTypeWriter, captionSpeed);
    }
  }
}

const ToolBar = () => {
  React.useEffect(() => {
    window.addEventListener('scroll', function (event) {
      var currentScrollingLocation = document.documentElement.scrollTop;
      if(currentScrollingLocation > 200 && !launchedCaptionType){
        captionTypeWriter();
        launchedCaptionType = true;
      }
    }, false);
  }, []);

  setInterval(showTime, 1000);
  
  return (
    <Row className="toolbar">
      <Col md="4" className="mobile-hide">
        <img className="windows-icon" src="/images/index/logo/logo_empty.png" />
      </Col>
      <Col md="4" className="icon-list">
        <a href="https://www.notion.so/product?utm_source=google&utm_campaign=2075789710&utm_medium=80211061601&utm_content=453572164479&utm_term=notion&targetid=aud-840164194060:kwd-312974742&gclid=CjwKCAjwyvaJBhBpEiwA8d38vBvyQvk8URIcin9rCaeki4_koez2hlrbk3GGqMbb61MV2Up2AWlFHBoCaDoQAvD_BwE" target="_blank" title="Notion">
          <img className="notion-icon" src="/images/index/logo/notion.png" />
        </a>
        <a href="https://code.visualstudio.com/" target="_blank" title="Visual Studio Code">
          <img className="visual-studio-code-icon" src="/images/index/logo/visual-studio-code.png" />
        </a>
        <a href="https://www.jetbrains.com/idea/" target="_blank" title="Intellij">
          <img className="intelliji-icon" src="/images/index/logo/intellij.png" />
        </a>
        <a href="https://www.sublimetext.com/" target="_blank" title="Sublime">
          <img className="intelliji-icon" src="/images/index/logo/sublime-text.svg" />
        </a>
      </Col>
      <Col md="2">
        <p id="caption" className="mobile-hide"></p>
      </Col>
      <Col md="2" className="mobile-hide">
        <p className="time" id="time" />
        <p className="time" id="date" />
      </Col>
    </Row>
  )
}

function showTime(){
  var currentTime = new Date();
  var dateDisplay = currentTime.getFullYear() + "-" + (currentTime.getMonth()+1) + "-" + currentTime.getDate();
  var timeDisplay = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
  var dateElement = document.getElementById("date");
  var timeElement = document.getElementById("time");
  if (dateElement !== null && timeElement !== null) {
    dateElement.innerHTML = dateDisplay;
    timeElement.innerHTML = timeDisplay;
  }  
}

export default ToolBar;

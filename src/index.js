import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import daily from './daily';
import {Helmet} from 'react-helmet';


ReactDOM.render(
  <>
  <header>
    <Helmet>
      <meta charSet='utf-8'/>
      <title>Cat Health Tracking</title>
    </Helmet>
  </header>
    <App />
  </>, document.getElementById('root')
);

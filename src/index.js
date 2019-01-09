import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import './js/main.js';
// import App from './App';
import About from './js/About';
import Sponsor from './js/Sponsor'
import Header from './js/Header'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('top'));
ReactDOM.render(<About />, document.getElementById('about'));
// ReactDOM.render(<Faq />, document.getElementById('faq'));
ReactDOM.render(<Sponsor />, document.getElementById('sponsors'));
// ReactDOM.render(<SocialMedia />, document.getElementById('social_media'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

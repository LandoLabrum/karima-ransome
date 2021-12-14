// import './main.css';
import Nav from './components/Navbar';
import Contact from './components/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Form from './components/ContactForm';
import preval from 'preval.macro'

import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router basename='/'>
        <Nav/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <div id="contactForm" className="modal secondary">
        <div className="modal-content">
          <Form/>
        </div>
        </div>
        <Contact/>
        <small className=''>
          <span className='row grey-text right'>
            Build Date: {preval`module.exports = new Date().toLocaleString();`}.
            </span>
          </small>
    </Router>
  );
}

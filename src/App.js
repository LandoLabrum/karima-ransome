import Nav from './components/Navbar';
import Contact from './components/Contact';
import Home from './pages/Home';
import Service from './pages/Services';
import About from './pages/About';
import Form from './components/ContactForm';
import EmploymentForm from './components/Employment';
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
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/employment" element={ <EmploymentForm />} />
        <Route path="/service" element={<Service />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <div id="contactForm" className="modal secondary full">
        <div className="modal-content">
          <Form />
          <div className='section right '>
            <a className="modal-close white-text waves-effect waves-green btn-flat">Dismiss</a>
          </div>
        </div>
      </div>
      {/* <div id="employmentForm" className="modal secondary full">
        <div className="modal-content">
          <EmploymentForm />
          <div className='section right '>
            <a class="modal-close white-text waves-effect waves-green btn-flat">Dismiss</a>
          </div>
        </div>
      </div> */}
      <Contact />
      <footer className="page-footer transparent">

        <small className=''>
          <span className='grey-text right'>
            Build Date: {preval`module.exports = new Date().toLocaleString();`}.
          </span>
        </small>
      </footer>
    </Router>
  );
}

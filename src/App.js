import './main.css';
import Nav from './components/Navbar';
import Contact from './components/Contact';
import Home from './pages/Home';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Nav/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Contact/>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
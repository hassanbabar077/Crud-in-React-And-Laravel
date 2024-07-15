// src/NavBar.js
import React from 'react';
import './App.css';
import {Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
      <div className="navbar-left">Website Name</div></Link>
      <div className="navbar-right">
        <Link to="/list" className="navbar-link">Add Product</Link>
       
        <button className="navbar-login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;

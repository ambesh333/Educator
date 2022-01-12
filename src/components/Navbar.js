import "../App.css";
import "../variable.css";
import "../media_queries.css";
import logo from '../images/logo.png'
import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Educator logo" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#course">Courses</a>
          </li>
          <li className="nav-item">
            <a href="#blog">Blog</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <button className="btn btn-primary">
          <p className="btn-text">Try for free</p>
          <span className="square"></span>
        </button>

        <button className="nav-toggle-btn">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>
      </nav>
    );
  }
}

// const navbarNav = document.querySelector('.navbar-nav');
// const navbarToggleBtn = document.querySelector('.nav-toggle-btn');


// navbarToggleBtn.addEventListener('click', function () {
//   navbarNav.classList.toggle('active');
//   this.classList.toggle('.active');


// });


export default Navbar;

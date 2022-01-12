import "../App.css";
import "../variable.css";
import "../media_queries.css";
import "../animation.css";
import logoFooter from "../images/logo-footer.png";
import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-grid">
          <div className="grid-item">
            <div className="footer-logo">
              <img
                src={logoFooter}
                alt="educator logo white"
              />
            </div>

            <p className="footer-text">
              Duis a tempor magna. Maecenas ligula felis, imperdiet quis arcu
              eget, blandit ultricies risus. Vivamus fringilla urna vel risus
              congue accumsan.
            </p>

            <div className="social-link">
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </div>
          </div>

          <ul className="grid-item">
            <h4 className="item-heading">Our Link</h4>

            <li className="list-item">
              <a href="#home">Home</a>
            </li>

            <li className="list-item">
              <a href="#about">About Us</a>
            </li>

            <li className="list-item">
              <a href="#course">Courses</a>
            </li>

            <li className="list-item">
              <a href="#blog">Blog</a>
            </li>

            <li className="list-item">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>

          <ul className="grid-item">
            <h4 className="item-heading">Other Link</h4>

            <li className="list-item">
              <a href="#">Instructor</a>
            </li>

            <li className="list-item">
              <a href="#">FAQ</a>
            </li>

            <li className="list-item">
              <a href="#">Event</a>
            </li>

            <li className="list-item">
              <a href="#">Privacy Policy</a>
            </li>

            <li className="list-item">
              <a href="#">Term & Condition</a>
            </li>
          </ul>

          <div className="grid-item">
            <h4 className="item-heading">Subscribe Now</h4>

            <div className="wrapper">
              <input type="text" name="subscribe" placeholder="Email Address" />

              <button className="send-btn">
                <ion-icon name="paper-plane"></ion-icon>
              </button>
            </div>
          </div>
        </div>

        <p className="copyright">
          Copyright © 2022 <a href="#">AmbeshGaunker</a>. All rights reserved.
        </p>
      </div>
    );
  }
}

export default Footer;

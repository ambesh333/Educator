import "../App.css";
import "../variable.css";
import "../media_queries.css";
import "../animation.css";
import cta from "../images/cta-bg-img.png";
import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <section className="contact">

        <div className="contact-card" id="contact">
          <img src={cta} alt="shape" className="contact-card-bg"/>

          <h2>Start Your Best Online Classes With Us</h2>

          <button className="btn btn-primary">
            <p className="btn-text">Contact Us</p>
            <span className="square"></span>
          </button>
        </div>

      </section>
        )
    }
}

export default Contact

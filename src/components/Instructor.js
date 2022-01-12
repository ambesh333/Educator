import "../App.css";
import "../variable.css";
import "../media_queries.css";
import "../animation.css";
import instructor2 from '../images/instructor-2.jpg'
import instructor3 from '../images/instructor-3.jpg'
import instructor4 from '../images/instructor-4.jpg'
import instructor1 from '../images/instructor-1.jpg'

import React, { Component } from 'react'

export class Instructor extends Component {
    render() {
        return (
            <section className="instructor">

        <p className="section-subtitle">Best Coach</p>

        <h2 className="section-title">Our Expert Instructor</h2>

        <div className="instructor-grid">

          <div className="instructor-card">

            <div className="instructor-img-box">
              <img src={instructor1} alt="instructor louis sullivan"/>

              <div className="social-link">
                <a href="#" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>

                <a href="#" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <a href="#" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </div>
            </div>

            <h4 className="instructor-name">Louis Sullivan</h4>

            <p className="instructor-title">Instructor</p>

          </div>

          <div className="instructor-card">

            <div className="instructor-img-box">
              <img src={instructor2} alt="instructor camden david"/>

              <div className="social-link">
                <a href="#" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>

                <a href="#" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <a href="#" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </div>
            </div>

            <h4 className="instructor-name">Camden David</h4>

            <p className="instructor-title">Instructor</p>

          </div>

          <div className="instructor-card">

            <div className="instructor-img-box">
              <img src={instructor3} alt="instructor fiona dean"/>

              <div className="social-link">
                <a href="#" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>

                <a href="#" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <a href="#" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </div>
            </div>

            <h4 className="instructor-name">Fiona Dean</h4>

            <p className="instructor-title">Instructor</p>

          </div>

          <div className="instructor-card">

            <div className="instructor-img-box">
              <img src={instructor4} alt="instructor cherish sosa"/>

              <div className="social-link">
                <a href="#" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>

                <a href="#" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <a href="#" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </div>
            </div>

            <h4 className="instructor-name">Cherish Sosa</h4>

            <p className="instructor-title">Instructor</p>

          </div>

        </div>

      </section>

        )
    }
}

export default Instructor

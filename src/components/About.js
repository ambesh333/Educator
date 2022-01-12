import "../App.css";
import "../variable.css";
import "../media_queries.css";
import "../animation.css";
import aboutImgBg from '../images/about-img-bg.png'
import aboutImg from '../images/about-img.png'
import bannerAlimentIcon1 from '../images/banner-aliment-icon-1.png'
import bannerAlimentIcon2 from '../images/banner-aliment-icon-3.png'


import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <section className="about" id="about">

        <div className="about-left">

          <div className="img-box">
            <img src={aboutImgBg} alt="about bg" className="about-bg"/>

            <img src={aboutImg} alt="about person" className="about-img"/>

            <img src={bannerAlimentIcon1} alt="" className="icon-1 smooth-zigzag-anim-1" width="250"/>
            <img src={bannerAlimentIcon2} alt="" className="icon-2 smooth-zigzag-anim-3" width="195"/>
          </div>

        </div>

        <div className="about-right">

          <p className="section-subtitle">About Us</p>

          <h2 className="section-title">We Have Best Online Education</h2>

          <p className="section-text">
            Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa vel, porttitor
            semper magna.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>

          <ul className="about-ul">

            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>Suspendisse nunc massa, pellentesque eu nibh eget.</p>
            </li>

            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>Suspendisse nunc massa, pellentesque eu nibh eget.</p>
            </li>

            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>Suspendisse nunc massa, pellentesque eu nibh eget.</p>
            </li>

          </ul>

          <button className="btn btn-primary">
            <p className="btn-text">Explore More</p>
            <span className="square"></span>
          </button>

        </div>

      </section>
        )
    }
}

export default About

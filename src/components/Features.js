import "../App.css";
import "../variable.css";
import "../media_queries.css";
import "../animation.css";
import featureIcon1 from '../images/feature-icon-1.png'
import featureIcon2 from '../images/feature-icon-2.png'
import featureIcon3 from '../images/feature-icon-3.png'
import coureFeaturesImg from '../images/coure-features-img.jpg'
import React, { Component } from 'react'

export class Features extends Component {
    render() {
        return (
            <section className="features">

        <div className="features-left">

          <p className="section-subtitle">Core Features</p>

          <h2 className="section-title">See What Our Mission Are</h2>

          <ul>

            <li className="features-item">
              <div className="item-icon-box blue">
                <img src={featureIcon1} alt="feature icon"/>
              </div>

              <div className="wrapper">

                <h3 className="item-title">Student Life</h3>

                <p className="item-text">Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim
                  dictum.</p>

              </div>
            </li>

            <li className="features-item">
              <div className="item-icon-box pink">
              <img src={featureIcon2} alt="feature icon"/>
              </div>

              <div className="wrapper">

                <h3 className="item-title">Best Online Class</h3>

                <p className="item-text">Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim
                  dictum.</p>

              </div>
            </li>

            <li className="features-item">
              <div className="item-icon-box purple">
              <img src={featureIcon3} alt="feature icon"/>
              </div>

              <div className="wrapper">

                <h3 className="item-title">24x7 Program</h3>

                <p className="item-text">Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim
                  dictum.</p>

              </div>
            </li>

          </ul>

        </div>

        <div className="features-right">
          <img src={coureFeaturesImg} alt="core features image"/>
        </div>

      </section>
        )
    }
}

export default Features

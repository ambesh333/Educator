import "../App.css";
import "../variable.css";
import "../media_queries.css";
import "../animation.css";
import eventImg from '../images/event-img.jpg'

import React, { Component } from 'react'

export class Events extends Component {
    render() {
        return (
            <section className="event">

        <div className="event-left">

          <div className="event-banner">
            <img src={eventImg} alt="event banner" className="banner-img"/>
          </div>

          <button className="play smooth-zigzag-anim-1">
            <div className="play-icon pulse-anim">
              <ion-icon name="play-circle"></ion-icon>
            </div>

            <p>Watch Us !</p>
          </button>

        </div>

        <div className="event-right">

          <p className="section-subtitle">Our Events</p>

          <h2 className="section-title">Join Our Upcoming Events</h2>

          <div className="event-card-group">

            <div className="event-card">

              <div className="content-left">
                <p className="day">28</p>
                <p className="month">Feb, 2022</p>
              </div>

              <div className="content-right">
                <div className="schedule">
                  <p className="time">10:30am To 2:30pm</p>
                  <p className="place">Poland</p>
                </div>

                <a href="#" className="event-name">Business creativity workshops</a>
              </div>

            </div>

            <div className="event-card">

              <div className="content-left">
                <p className="day">15</p>
                <p className="month">Mar, 2022</p>
              </div>

              <div className="content-right">
                <div className="schedule">
                  <p className="time">10:30am To 2:30pm</p>
                  <p className="place">Poland</p>
                </div>

                <a href="#" className="event-name">Street Performance: Call for Art.</a>
              </div>

            </div>

            <div className="event-card">

              <div className="content-left">
                <p className="day">20</p>
                <p className="month">May, 2022</p>
              </div>

              <div className="content-right">
                <div className="schedule">
                  <p className="time">10:30am To 2:30pm</p>
                  <p className="place">Poland</p>
                </div>

                <a href="#" className="event-name">Digital transformation conference</a>
              </div>

            </div>

          </div>

        </div>

      </section>

        )
    }
}

export default Events

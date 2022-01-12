import "../App.css";
import "../variable.css";
import "../media_queries.css";
import "../animation.css";
import quote from "../images/quote.png";
import client from "../images/client.jpg";
import React, { Component } from "react";

export class Testimonials extends Component {
  render() {
    return (
      <section className="testimonials">
        <div className="testimonials-left">
          <p className="section-subtitle">Testimonial</p>

          <h2 className="section-title">What Our Client Says About Us</h2>

          <p className="section-text">
            Proin et lacus eu odio tempor porttitor id vel augue. Vivamus
            volutpat vehicula sem, et imperdiet enim tempor id. Phasellus
            lobortis efficitur nisl eget vehicula. Donec viverra blandit nunc,
            nec tempor ligula ullamcorper venenatis.
          </p>
        </div>

        <div className="testimonials-right">
          <div className="testimonials-card">
            <img src={quote} alt="quote icon" className="quote-img" />

            <p className="testimonials-text">
              "Proin feugiat tortor non neque eleifend, at fermentum est
              elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit
              amet ligula ut eleifend. Mauris consequat mauris sit amet turpis
              commodo fermentum. Quisque consequat tortor ut nisl finibus".
            </p>

            <div className="testimonials-client">
              <div className="client-img-box">
                <img src={client} alt="client christine rose" />
              </div>

              <div className="client-detail">
                <h4 className="client-name">Christine Rose</h4>

                <p className="client-title">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;

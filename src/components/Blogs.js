import "../App.css";
import "../variable.css";
import "../media_queries.css";
import "../animation.css";
import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog-2.jpg";
import blog3 from "../images/blog-3.jpg";
import comment from "../images/comment.png";
import calendar from "../images/calendar.png";
import React, { Component } from 'react'

export class Blogs extends Component {
    render() {
        return (
            <section className="blog" id="blog">

            <p className="section-subtitle">Our Blog</p>
    
            <h2 className="section-title">Latest Blog & News</h2>
    
            <div className="blog-grid">
    
              <div className="blog-card">
    
                <div className="blog-banner-box">
                  <img src={blog1} alt="blog banner"/>
                </div>
    
                <div className="blog-content">
    
                  <h3 className="blog-title">
                    <a href="#">Proin feugiat tortor non neque eleifend.</a>
                  </h3>
    
                  <div className="wrapper">
    
                    <div className="blog-publish-date">
                      <img src={calendar} alt="calendar icon"/>
    
                      <a href="#">07 Jan, 2022</a>
                    </div>
    
                    <div className="blog-comment">
                      <img src={comment} alt="comment icon"/>
    
                      <a href="#">3 Comments</a>
                    </div>
    
                  </div>
    
                </div>
    
              </div>
    
              <div className="blog-card">
    
                <div className="blog-banner-box">
                  <img src={blog2} alt="blog banner"/>
                </div>
    
                <div className="blog-content">
    
                  <h3 className="blog-title">
                    <a href="#">Proin feugiat tortor non neque eleifend.</a>
                  </h3>
    
                  <div className="wrapper">
    
                    <div className="blog-publish-date">
                      <img src={calendar} alt="calendar icon"/>
    
                      <a href="#">04 Jan, 2022</a>
                    </div>
    
                    <div className="blog-comment">
                      <img src={comment} alt="comment icon"/>
    
                      <a href="#">10 Comments</a>
                    </div>
    
                  </div>
    
                </div>
    
              </div>
    
              <div className="blog-card">
    
                <div className="blog-banner-box">
                  <img src={blog3} alt="blog banner"/>
                </div>
    
                <div className="blog-content">
    
                  <h3 className="blog-title">
                    <a href="#">Proin feugiat tortor non neque eleifend.</a>
                  </h3>
    
                  <div className="wrapper">
    
                    <div className="blog-publish-date">
                      <img src={calendar} alt="calendar icon"/>
    
                      <a href="#">01 Jan, 2022</a>
                    </div>
    
                    <div className="blog-comment">
                      <img src={comment} alt="comment icon"/>
    
                      <a href="#">5 Comments</a>
                    </div>
    
                  </div>
    
                </div>
    
              </div>
    
            </div>
    
          </section>
        )
    }
}

export default Blogs

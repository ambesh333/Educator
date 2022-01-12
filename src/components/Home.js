import "../App.css";
import "../variable.css";
import "../media_queries.css";
import "../animation.css";
import shape1 from '../images/shape-1.png'
import shape2 from '../images/shape-2.png'
import shape3 from '../images/shape-3.png'
import shape4 from '../images/shape-4.png'
import bannerline from '../images/banner-line.png'
import bannerImgBg from '../images/banner-img-bg.png'
import bannerImg from '../images/banner-img.png'
import bannerAlimentIcon1 from '../images/banner-aliment-icon-1.png'
import bannerAlimentIcon2 from '../images/banner-aliment-icon-2.png'
import bannerAlimentIcon3 from '../images/banner-aliment-icon-3.png'
import bannerAlimentIcon4 from '../images/banner-aliment-icon-4.png'
import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <section className="home" id="home">

            <div className="deco-shape shape-1">
              <img src={shape1} alt="art shape" width="70"/>
            </div>
            <div className="deco-shape shape-2">
              <img src={shape2} alt="art shape" width="55"/>
            </div>
            <div className="deco-shape shape-3">
              <img src={shape3} alt="art shape" width="120"/>
            </div>
            <div className="deco-shape shape-4">
              <img src={shape4} alt="art shape" width="30"/>
            </div>
    
            <div className="home-left">
    
              <p className="section-subtitle">Welcome To Online Coaching</p>
    
              <h1 className="main-heading">
                Get Class From Top
                <span className="underline-img">Instructor <img src={bannerline} alt="line"/></span>
              </h1>
    
              <p className="section-text">
                Integer in magna in est ultrices bibendum eget enim et dui imperdiet faucibus. Fusce eu tristique felis.
              </p>
    
              <div className="home-btn-group">
                <button className="btn btn-primary">
                  <p className="btn-text">Explore Courses</p>
                  <span className="square"></span>
                </button>
    
                <button className="btn btn-secondary">
                  <p className="btn-text">Contact Us</p>
                  <span className="square"></span>
                </button>
              </div>
    
            </div>
    
            <div className="home-right">
    
              <div className="img-box">
    
                <img src={bannerImgBg} alt="colorful background shape" className="background-shape"/>
                <img src={bannerImg} alt="banner image" className="banner-img"/>
    
                <img src={bannerAlimentIcon1} alt="" className="icon-1 smooth-zigzag-anim-1" width="250"/>
                <img src={bannerAlimentIcon2} alt="" className="icon-2 smooth-zigzag-anim-2" width="240"/>
                <img src={bannerAlimentIcon3} alt="" className="icon-3 smooth-zigzag-anim-3" width="195"/>
                <img src={bannerAlimentIcon4} alt="" className="icon-4 drop-anim"/>
    
              </div>
    
            </div>
    
          </section>
        )
    }
}

export default Home

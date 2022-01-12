import "../App.css";
import "../variable.css";
import "../media_queries.css";
import "../animation.css";
import course1 from '../images/course-1.jpg'
import courseInstructorImg from '../images/course-instructor-img.jpg'
import studentIcon from '../images/student-icon.png'
import course2 from '../images/course-2.jpg'
import course3 from '../images/course-3.jpg'
import course4 from '../images/course-4.jpg'
import course5 from '../images/course-5.jpg'
import course6 from '../images/course-6.jpg'
import React, { Component } from 'react'

export class CourseSection extends Component {
    render() {
        return (
            <section className="course" id="course">

            <p className="section-subtitle">Our Online Courses</p>
    
            <h2 className="section-title">Find The Right Online Course For You</h2>
    
            <div className="course-grid">
    
              <div className="course-card">
    
                <div className="course-banner">
                  <img src={course1} alt="course banner"/>
    
                  <div className="course-tag-box">
                    <a href="#" className="badge-tag orange">Business</a>
                    <a href="#" className="badge-tag blue">Marketing</a>
                  </div>
                </div>
    
                <div className="course-content">
    
                  <h3 className="card-title">
                    <a href="#">Become product manager learn skills.</a>
                  </h3>
    
                  <div className="wrapper border-bottom">
    
                    <div className="author">
                      <img src={courseInstructorImg} alt="course instructor image" className="author-img"/>
    
                      <a href="#" className="author-name">Lillian Wals</a>
                    </div>
    
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <p>5.0 (2k)</p>
                    </div>
    
                  </div>
    
                  <div className="wrapper">
                    <div className="course-price">$50.00</div>
    
                    <div className="enrolled">
                      <div className="icon-user">
                        <img src={studentIcon} alt="user icon"/>
                      </div>
    
                      <p>600k</p>
                    </div>
                  </div>
    
                </div>
    
              </div>
    
    
              <div className="course-card">
    
                <div className="course-banner">
                  <img src={course2} alt="course banner"/>
    
                  <div className="course-tag-box">
                    <a href="#" className="badge-tag orange">Business</a>
                    <a href="#" className="badge-tag blue">Marketing</a>
                  </div>
                </div>
    
                <div className="course-content">
    
                  <h3 className="card-title">
                    <a href="#">Fashion and luxury fashion in a changing.</a>
                  </h3>
    
                  <div className="wrapper border-bottom">
    
                    <div className="author">
                      <img src={courseInstructorImg}alt="course instructor image" className="author-img"/>
    
                      <a href="#" className="author-name">Lillian Wals</a>
                    </div>
    
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <p>4.7 (5k)</p>
                    </div>
    
                  </div>
    
                  <div className="wrapper">
                    <div className="course-price">$80.00</div>
    
                    <div className="enrolled">
                      <div className="icon-user">
                        <img src={studentIcon} alt="user icon"/>
                      </div>
    
                      <p>545k</p>
                    </div>
                  </div>
    
                </div>
    
              </div>
    
    
              <div className="course-card">
    
                <div className="course-banner">
                  <img src={course3} alt="course banner"/>
    
                  <div className="course-tag-box">
                    <a href="#" className="badge-tag orange">Business</a>
                    <a href="#" className="badge-tag blue">Marketing</a>
                  </div>
                </div>
    
                <div className="course-content">
    
                  <h3 className="card-title">
                    <a href="#">Learning to write as a professional.</a>
                  </h3>
    
                  <div className="wrapper border-bottom">
    
                    <div className="author">
                      <img src={courseInstructorImg}alt="course instructor image" className="author-img"/>
    
                      <a href="#" className="author-name">Lillian Wals</a>
                    </div>
    
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <p>4.1 (3k)</p>
                    </div>
    
                  </div>
    
                  <div className="wrapper">
                    <div className="course-price">$29.90</div>
    
                    <div className="enrolled">
                      <div className="icon-user">
                        <img src={studentIcon} alt="user icon"/>
                      </div>
    
                      <p>317k</p>
                    </div>
                  </div>
    
                </div>
    
              </div>
    
    
              <div className="course-card">
    
                <div className="course-banner">
                  <img src={course4} alt="course banner"/>
    
                  <div className="course-tag-box">
                    <a href="#" className="badge-tag orange">Business</a>
                    <a href="#" className="badge-tag blue">Marketing</a>
                  </div>
                </div>
    
                <div className="course-content">
    
                  <h3 className="card-title">
                    <a href="#">Improving accessibility of Your markdown.</a>
                  </h3>
    
                  <div className="wrapper border-bottom">
    
                    <div className="author">
                      <img src={courseInstructorImg}alt="course instructor image" className="author-img"/>
    
                      <a href="#" className="author-name">Lillian Wals</a>
                    </div>
    
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <p>4.8 (3.9k)</p>
                    </div>
    
                  </div>
    
                  <div className="wrapper">
                    <div className="course-price">$49.90</div>
    
                    <div className="enrolled">
                      <div className="icon-user">
                        <img src={studentIcon} alt="user icon"/>
                      </div>
    
                      <p>891k</p>
                    </div>
                  </div>
    
                </div>
    
              </div>
    
    
    
              <div className="course-card">
    
                <div className="course-banner">
                  <img src={course5}  alt="course banner"/>
    
                  <div className="course-tag-box">
                    <a href="#" className="badge-tag orange">Business</a>
                    <a href="#" className="badge-tag blue">Marketing</a>
                  </div>
                </div>
    
                <div className="course-content">
    
                  <h3 className="card-title">
                    <a href="#">Master query in a short period of time.</a>
                  </h3>
    
                  <div className="wrapper border-bottom">
    
                    <div className="author">
                      <img src={courseInstructorImg}alt="course instructor image" className="author-img"/>
    
                      <a href="#" className="author-name">Lillian Wals</a>
                    </div>
    
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <p>3.8 (1k)</p>
                    </div>
    
                  </div>
    
                  <div className="wrapper">
                    <div className="course-price">$89.00</div>
    
                    <div className="enrolled">
                      <div className="icon-user">
                        <img src={studentIcon} alt="user icon"/>
                      </div>
    
                      <p>204k</p>
                    </div>
                  </div>
    
                </div>
    
              </div>
    
    
              <div className="course-card">
    
                <div className="course-banner">
                  <img src={course6}  alt="course banner"/>
    
                  <div className="course-tag-box">
                    <a href="#" className="badge-tag orange">Business</a>
                    <a href="#" className="badge-tag blue">Marketing</a>
                  </div>
                </div>
    
                <div className="course-content">
    
                  <h3 className="card-title">
                    <a href="#">Business Intelligence analyst Course 2022.</a>
                  </h3>
    
                  <div className="wrapper border-bottom">
    
                    <div className="author">
                      <img src={courseInstructorImg}alt="course instructor image" className="author-img"/>
    
                      <a href="#" className="author-name">Lillian Wals</a>
                    </div>
    
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <p>4.9 (23k)</p>
                    </div>
    
                  </div>
    
                  <div className="wrapper">
                    <div className="course-price">$199.00</div>
    
                    <div className="enrolled">
                      <div className="icon-user">
                        <img src={studentIcon} alt="user icon"/>
                      </div>
    
                      <p>1.3M</p>
                    </div>
                  </div>
    
                </div>
    
              </div>
    
            </div>
    
            <button className="btn btn-primary">
              <p className="btn-text">View All Course</p>
              <span className="square"></span>
            </button>
    
          </section>
    
    
    
    
        )
    }
}

export default CourseSection

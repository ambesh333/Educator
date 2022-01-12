import "../App.css";
import "../variable.css";
import "../media_queries.css";
import "../animation.css";
import courseCategoryIcons1 from '../images/course-category-icon-1.png'
import courseCategoryIcons1w from '../images/course-category-icon-1-w.png'
import courseCategoryIcons2 from '../images/course-category-icon-2.png'
import courseCategoryIcons2w from '../images/course-category-icon-2-w.png'
import courseCategoryIcons3 from '../images/course-category-icon-3.png'
import courseCategoryIcons3w from '../images/course-category-icon-3-w.png'
import courseCategoryIcons4 from '../images/course-category-icon-4.png'
import courseCategoryIcons4w from '../images/course-category-icon-4-w.png'
import courseCategoryIcons5 from '../images/course-category-icon-5.png'
import courseCategoryIcons5w from '../images/course-category-icon-5-w.png'
import courseCategoryIcons6 from '../images/course-category-icon-6.png'
import courseCategoryIcons6w from '../images/course-category-icon-6-w.png'

import React, { Component } from 'react'

export class CourseCategory extends Component {
    render() {
        return (
            <section className="category">

        <p className="section-subtitle">Course Category</p>

        <h2 className="section-title">Explore Popular Courses</h2>

        <ul className="course-item-group">

          <li className="course-category-item">

            <div className="wrapper">
              <img src={courseCategoryIcons1} alt="category icon" className="category-icon default"/>

              <img src={courseCategoryIcons1w} alt="category icon white"
                className="category-icon hover"/>
            </div>

            <div className="course-category-content">
              <h3 className="category-title">
                <a href="#">Learn Data Science</a>
              </h3>

              <p className="category-subtitle">Data is Everything</p>
            </div>

          </li>


          <li className="course-category-item">

            <div className="wrapper">
              <img src={courseCategoryIcons2} alt="category icon" className="category-icon default"/>

              <img src={courseCategoryIcons2w} alt="category icon white"
                className="category-icon hover"/>
            </div>

            <div className="course-category-content">
              <h3 className="category-title">
                <a href="#">Business Strategy</a>
              </h3>

              <p className="category-subtitle">Improve your business</p>
            </div>

          </li>


          <li className="course-category-item">

          <div className="wrapper">
              <img src={courseCategoryIcons3} alt="category icon" className="category-icon default"/>

              <img src={courseCategoryIcons3w} alt="category icon white"
                className="category-icon hover"/>
            </div>

            <div className="course-category-content">
              <h3 className="category-title">
                <a href="#">Learn Art & Design</a>
              </h3>

              <p className="category-subtitle">Fun & Challenging</p>
            </div>

          </li>


          <li className="course-category-item">

          <div className="wrapper">
              <img src={courseCategoryIcons4} alt="category icon" className="category-icon default"/>

              <img src={courseCategoryIcons4w} alt="category icon white"
                className="category-icon hover"/>
            </div>

            <div className="course-category-content">
              <h3 className="category-title">
                <a href="#">Learn Lifestyle</a>
              </h3>

              <p className="category-subtitle">New Skills, New You</p>
            </div>

          </li>


          <li className="course-category-item">

          <div className="wrapper">
              <img src={courseCategoryIcons5} alt="category icon" className="category-icon default"/>

              <img src={courseCategoryIcons5w} alt="category icon white"
                className="category-icon hover"/>
            </div>

            <div className="course-category-content">
              <h3 className="category-title">
                <a href="#">Learn Marketing</a>
              </h3>

              <p className="category-subtitle">Improve your business</p>
            </div>

          </li>


          <li className="course-category-item">

          <div className="wrapper">
              <img src={courseCategoryIcons6} alt="category icon" className="category-icon default"/>

              <img src={courseCategoryIcons6w} alt="category icon white"
                className="category-icon hover"/>
            </div>

            <div className="course-category-content">
              <h3 className="category-title">
                <a href="#">Learn Finance</a>
              </h3>

              <p className="category-subtitle">Fun & Challenging</p>
            </div>

          </li>

        </ul>

      </section>

        )
    }
}

export default CourseCategory


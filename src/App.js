import Navbar from './components/Navbar'
import Home from './components/Home'
import CourseCategory from './components/CourseCategory'
import CourseSection from './components/CourseSection.js'
import About from './components/About'
import Event from './components/Events'
import Features from './components/Features'
import Instructor from './components/Instructor'
import Testimonials from './components/Testimonials'
import Blog from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
   <>
  <div className="container">
    <header>
      <Navbar/>
    </header>
    <main>
     <Home/>
     <CourseCategory/>
    <About/>
    <CourseSection/>
    <Event/>
    <Features/>
    <Instructor/>
  <Testimonials/>
  <Blog/>
  <Contact/>
    </main>
     <footer>
     <Footer/>
     </footer>
  </div>
   </>
  );
}

export default App;

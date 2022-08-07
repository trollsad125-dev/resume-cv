import React from 'react'
import Navbar from './component/Navbar'
import About from './component/About'
import Experience from './component/Experience'
import Education from './component/Education'
import Skills from './component/Skills'
import Interests from './component/Interests'
import Awards from './component/Awards'
import 'jquery.easing'
import $ from 'jquery'
import 'bootstrap'
import './App.css'
import './resource/vendor/bootstrap/css/bootstrap.min.css'
import './resource/vendor/font-awesome/css/font-awesome.min.css'
import './resource/vendor/devicons/css/devicons.min.css'
import './resource/vendor/simple-line-icons/css/simple-line-icons.css'
import './resource/css/resume.css'



const App = () => {


  return (
    <React.Fragment>
      <Navbar/>
      <About/>
      <Experience/>
      <Education />
      <Skills />
      <Interests />
      <Awards />
    </React.Fragment>

    
  );
}

export default App;

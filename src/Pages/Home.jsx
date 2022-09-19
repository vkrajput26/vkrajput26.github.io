import React from 'react';
import About from './About';
import Contact from './Contact';
import Git from './Git';
import './Home.css'
import Projects from './Projects';
import Skills from './Skills';
import Statistics from './Statistics';
const Home=()=> {
    return (
      <>
        <div className='home-div'>
        <div className='small-screen-div'>
               <img className='profile-small-screen-img' src="https://avatars.githubusercontent.com/u/101566553?v=4" alt="" />
          </div>
          <div className='left-div'>
            <div className='my-ges'>Hi, I'am</div>
            <div className='my-name' > Vivek Rajput</div>
         
            <div className='tag-line'>Full Stack Web Developer</div>
            <a href="https://drive.google.com/file/d/1BSw8HeMUp30gNrzQRFbHE1Vz5nF8BLpm/view?usp=sharing" 
             download>
            <button className='Resume-btn'>Resume</button>
            </a>
          </div>

          <div className='right-div'>
               <img className='profile-img' src="https://avatars.githubusercontent.com/u/101566553?v=4" alt="" />
          </div>
        </div>
        <About/>
        <Projects/>
        <Skills/>
        <Statistics/>
        <Git/>
        <Contact/>

        </>
    );
}

export default Home;
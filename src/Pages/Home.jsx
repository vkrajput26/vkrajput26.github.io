import React from 'react';
import './Home.css'
const Home=()=> {
    return (
        <div className='home-div'>
          <div className='left-div'>
            <div>Hi, I'am</div>
            <div> Vivek Rajput</div>
         
            <div className='tag-line'>Full Stack Web Developer</div>
            <a href="Vivek_Rajput Resume.pdf"  download="Vivek_Rajput Resume.pdf">
            <button className='Resume-btn'>Resume</button>
            </a>
          </div>

          <div className='right-div'>
               <img className='profile-img' src="https://avatars.githubusercontent.com/u/101566553?v=4" alt="" />
          </div>
        </div>
    );
}

export default Home;
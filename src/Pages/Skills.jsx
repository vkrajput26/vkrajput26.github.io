import React from 'react';
import './Skills.css'
const Skills=(props) =>{
    return (
        <div className='skills' >
            <h2>Technical Skills</h2>
            <div className='skills-box'>
                        <div className='icon-box' >
                               <img className='skill-img' src="https://portfolio-mrsagar105.vercel.app/images/html.png"  alt="" /> 
                               <div className='tag-name' >Html</div>
                        </div>

                        <div className='icon-box' >
                               <img className='skill-img' src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"  alt="" /> 
                               <div className='tag-name' >Css</div>
                        </div>
                        <div className='icon-box' >
                               <img className='skill-img' src="https://portfolio-mrsagar105.vercel.app/images/javascriptcolor.png"  alt="" /> 
                               <div className='tag-name' >Javascript</div>
                        </div>
                        <div className='icon-box' >
                               <img className='skill-img' src="https://portfolio-mrsagar105.vercel.app/images/react.png" alt="" /> 
                               <div className='tag-name' >React JS</div>
                        </div>
                        <div className='icon-box' >
                               <img className='skill-img' src="https://portfolio-mrsagar105.vercel.app/images/redux.png"  alt="" /> 
                               <div className='tag-name' >Redux</div>
                        </div>
                        <div className='icon-box' >
                               <img className='skill-img' src="https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b_400x400.jpg"  alt="" /> 
                               <div className='tag-name' >TypeScript</div>
                        </div>
                        <div className='icon-box' >
                               <img className='skill-img' src="https://icons-for-free.com/download-icon-cypress-1324440144114984250_512.png"  alt="" /> 
                               <div className='tag-name' >Cypress</div>
                        </div>
                        <div className='icon-box' >
                               <img className='skill-img' src="https://1000logos.net/wp-content/uploads/2020/08/Git-Emblem.jpg"  alt="" /> 
                               <div className='tag-name' >Git</div>
                        </div>
                        <div className='icon-box' >
                               <img className='skill-img' src="https://www.coffeeclass.io/logos/chakra-ui.png"  alt="" /> 
                               <div className='tag-name' >Chakra UI</div>
                        </div>
                        <div className='icon-box' >
                               <img className='skill-img' src="https://www.svgrepo.com/show/353869/heroku-icon.svg" alt="" /> 
                               <div className='tag-name' >Heroku</div>
                        </div>
            </div>
        </div>
    );
}

export default Skills;
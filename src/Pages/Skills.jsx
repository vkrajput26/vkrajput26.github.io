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
                               <img className='skill-img' src="https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png"  alt="" /> 
                               <div className='tag-name' >MongoDB</div>
                        </div>
                        <div className='icon-box' >
                               <img className='skill-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"  alt="" /> 
                               <div className='tag-name' >Nodejs</div>
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
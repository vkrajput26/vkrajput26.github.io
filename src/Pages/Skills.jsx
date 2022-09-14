import React from 'react';
import './Skills.css'
const Skills=(props) =>{
    return (
        <div className='skills' >
            <h2>Technical Skills</h2>
            <div className='skills-box'>
                        <div className='icon-box' >
                               <img src="https://portfolio-mrsagar105.vercel.app/images/html.png" width="50px" alt="" /> 
                               <div className='tag-name' >Html</div>
                        </div>

                        <div className='icon-box' >
                               <img src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png" width="50px" alt="" /> 
                               <div className='tag-name' >Css</div>
                        </div>
                        <div className='icon-box' >
                               <img src="https://portfolio-mrsagar105.vercel.app/images/javascriptcolor.png" width="50px" alt="" /> 
                               <div className='tag-name' >Javascript</div>
                        </div>
                        <div className='icon-box' >
                               <img src="https://portfolio-mrsagar105.vercel.app/images/react.png" width="70px" alt="" /> 
                               <div className='tag-name' >React JS</div>
                        </div>
                        <div className='icon-box' >
                               <img src="https://portfolio-mrsagar105.vercel.app/images/redux.png" width="50px" alt="" /> 
                               <div className='tag-name' >Redux</div>
                        </div>
                        <div className='icon-box' >
                               <img src="https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b_400x400.jpg" width="50px" alt="" /> 
                               <div className='tag-name' >TypeScript</div>
                        </div>
                        <div className='icon-box' >
                               <img src="https://icons-for-free.com/download-icon-cypress-1324440144114984250_512.png" width="50px" alt="" /> 
                               <div className='tag-name' >Cypress</div>
                        </div>
                        <div className='icon-box' >
                               <img src="https://1000logos.net/wp-content/uploads/2020/08/Git-Emblem.jpg" width="70px" alt="" /> 
                               <div className='tag-name' >Git</div>
                        </div>
                        <div className='icon-box' >
                               <img src="https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg" width="50px" alt="" /> 
                               <div className='tag-name' >Chakra UI</div>
                        </div>
                        <div className='icon-box' >
                               <img src="https://www.svgrepo.com/show/353869/heroku-icon.svg" width="50px" alt="" /> 
                               <div className='tag-name' >Heroku</div>
                        </div>
            </div>
        </div>
    );
}

export default Skills;
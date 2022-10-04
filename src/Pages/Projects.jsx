import React from 'react';
import './Project.css'
import { Link } from 'react-router-dom';
const Projects=(props)=> {
    return (
        <div className='projects'>
                    <h1 className='title'>Projects</h1>

                    <div className='project-box' >
                        
                        <div className='description-box' >
                               
                                <div className='project-title'> Lovoda Clone</div>
                                
                                <div className='project-desc'>Lovoda is an women jewellary accessories website. it is an team project, We have built the exact website clone as it is on the original website.</div>
                                <div className='tech-stack' >
                                      
                                    <button>React</button>
                                    <button>Redux</button>
                                    <button>firebase</button>
                                </div>
                                <div className='code-btn'>
                               <a className='anchor-tag' href="https://github.com/vkrajput26/-crazy-science-2420"> <div>Code</div>  </a>    
                               <a className='anchor-tag' href="https://lovoda-clone-three.vercel.app/"> <div>Live</div> </a> 
                                </div>

                        </div>
                        <div class="vl"></div>

                        <div className='image-box' >
                                <img  src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/13122-2_1500x.jpg?v=1645120932" alt="lovoda-img"    />
                        </div>
            </div>



            <div className='project-box' >
                        
                        <div className='description-box' >
                               
                                <div className='project-title'> BlueFly Clone</div>
                                
                                <div className='project-desc'>Bluefly is an shopping website which offers more than 350 brands</div>
                                <div className='tech-stack' >
                                    <button>JavaScript</button>
                                    <button>HTML</button>
                                    <button>Css</button>
                                </div>
                                <div className='code-btn'>
                               <a className='anchor-tag' href="https://github.com/vkrajput26/Bluefly-Clone"> <div>Code</div>  </a>    
                               <a className='anchor-tag' href="https://heartfelt-blancmange-d5bcab.netlify.app/"> <div>Live</div> </a> 
                                </div>

                        </div>
                        <div class="vl"></div>

                        <div className='image-box' >
                                <img src="https://d1gzz21cah5pzn.cloudfront.net/img/websites/b/blu/bluefly.com-desktop@2x.1653081619.jpg" alt="bluefly-img"    />
                        </div>
            </div>


            <div className='project-box' >
                        
                        <div className='description-box' >
                               
                                <div className='project-title'> Urban Company Clone</div>
                                
                                <div className='project-desc'>Urban Company  offers high-quality services like haircut, home cleaning, massages, and more</div>
                                <div className='tech-stack' >
                                    <button>React JS</button>
                                    <button>Chakra UI</button>
                                    <button>HTML</button>
                                </div>
                                <div className='code-btn'>
                               <a className='anchor-tag' href="https://github.com/vkrajput26/plastic-quarter-8756"> <div>Code</div>  </a>    
                               <a className='anchor-tag' href="https://urbancompany.vercel.app/"> <div>Live</div> </a> 
                                </div>

                        </div>

                        <div class="vl"></div>

                        <div className='image-box' >
                                <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2021/09/Untitled-design-1024x512.jpg" alt="urbanCompany-img"   />
                        </div>
            </div>


            <div className='project-box' >
                        
                        <div className='description-box' >
                               
                                <div className='project-title'> JioMart Clone</div>
                                
                                <div className='project-desc'>JioMart is an Indian e-commerce Company. Which offers a wide range
                                of groceries and daily wear fashion products.</div>
                                <div className='tech-stack' >
                                <button>React JS</button>
                                    <button>Chakra UI</button>
                                    <button>HTML</button>
                                </div>
                                <div className='code-btn'>
                               <a className='anchor-tag' href="https://github.com/vkrajput26/garrulous-bikes-6453"> <div>Code</div>  </a>    
                               <a className='anchor-tag' href="https://effortless-pegasus-824e6b.netlify.app/"> <div>Live</div> </a> 
                                </div>

                        </div>

                        <div class="vl"></div>

                        <div className='image-box' >
                                <img src="http://www.niranjanramesh.com/wp-content/uploads/2020/06/JioMart-review-in-india-chennai-mumbai-delhi-bengaluru-kolkata-delhi-1024x498.png" alt="jiomart-img" width="100%" />
                        </div>
            </div>
           
        </div>
    );
}

export default Projects;
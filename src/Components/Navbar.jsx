


 import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../Pages/About';
 import './Navbar.css'
const Navbar=() =>{
   const [active,setActive] =useState("#")
    return (
        <div className='NavbarLink' >
               {/* <a href="#about" onClick={()=>setActive("#about")} className={active==="#about" ? 'active': "" } ><About/></a> */}
           <Link className='Links'  to="/about" >About</Link> 
            <Link className='Links'  to="/projects" >Projects</Link>
            <Link className='Links'  to="/skills" >Skills</Link>
            <Link className='Links'  to="/contact">Contact</Link>
        </div>
    );
 }
 
 export default Navbar;
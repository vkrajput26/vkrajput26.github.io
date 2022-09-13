


 import React from 'react';
import { Link } from 'react-router-dom';
 import './Navbar.css'
const Navbar=(props) =>{
    return (
        <div className='NavbarLink' >
           <Link className='Links'  to="/about" >About</Link> 
            <Link className='Links'  to="/projects" >Projects</Link>
            <Link className='Links'  to="/skills" >Skills</Link>
            <Link className='Links'  to="/contact">Contact</Link>
        </div>
    );
 }
 
 export default Navbar;
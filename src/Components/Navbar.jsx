


 import React, { useState } from 'react';

import About from '../Pages/About';
 import './Navbar.css'
 import {Link,animateScroll} from "react-scroll"
 import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    Box,
    Button
            
} from '@chakra-ui/react'
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Resume from '../Pages/Resume';
const Navbar=() =>{
   const [click,setClick] =useState(false)
    return (
        <>
        <div className='navbar-main-box'>
            <div className='name-div'><span className='first-latter'>Vi</span>vek</div>
        <div className='NavbarLink' >
               {/* <a href="#about" onClick={()=>setActive("#about")} className={active==="#about" ? 'active': "" } ><About/></a> */}
               <Link  activeClass="active" to ='/' onClick={()=>animateScroll.scrollToTop()} spy={true} smooth={true}  ></Link> 
           <Link className='Links' activeClass="active" to ='about' onClick={()=>setClick(true)} spy={true} smooth={true}  >About</Link> 
            <Link className='Links' activeClass="active"  to="skills" onClick={()=>setClick(true)} spy={true} smooth={true} >Skills</Link>
            <Link className='Links' activeClass="active"  to="projects" onClick={()=>setClick(true)} spy={true} smooth={true} >Projects</Link>
            <Link className='Links' activeClass="active"  to="contact" onClick={()=>setClick(true)} spy={true} smooth={true}>Contact</Link>
            <Resume/>

        </div>

        <   div className='hambergur'>
                <Menu>
        <MenuButton
          as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
        />
        <MenuList>
            <MenuItem >
            <Link  activeClass="active" to ='/' onClick={()=>animateScroll.scrollToTop()} spy={true} smooth={true}  ></Link> 

            </MenuItem>
            <MenuItem >
            <Link className='Links' activeClass="active" to ='about' onClick={()=>setClick(true)} spy={true} smooth={true}  >About</Link> 

            </MenuItem>
            <MenuItem >
            <Link className='Links' activeClass="active"  to="skills" onClick={()=>setClick(true)} spy={true} smooth={true} >Skills</Link>
            </MenuItem>
            <MenuItem >
            <Link className='Links' activeClass="active"  to="projects" onClick={()=>setClick(true)} spy={true} smooth={true} >Projects</Link>
            </MenuItem>
            <MenuItem >
            <Link className='Links' activeClass="active"  to="contact" onClick={()=>setClick(true)} spy={true} smooth={true}>Contact</Link>
            </MenuItem>
        
            <Resume className='Links' />
           
        </MenuList>
        </Menu>
        </  div>
        </div>
        {/* //hemberbur */}

        </>

    );
 }
 
 export default Navbar;
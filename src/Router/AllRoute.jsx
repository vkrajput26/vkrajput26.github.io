

import React from 'react';
import { Routes,Route } from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import Skills from '../Pages/Skills';
const  AllRoute=()=> {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
             <Route path='/about' element={<About/>} />
             <Route path='/contact' element={<Contact/>} />
             <Route path='/projects' element={<Projects/>} />
             <Route path='/skills' element={<Skills/>} />
             <Route path='/resume' element={<Resume/>} />
             <Route path='/email' element={<Contact/>} />
        </Routes>
    );
}

export default AllRoute;
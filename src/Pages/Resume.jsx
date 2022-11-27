import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import './Resume.css'
const Resume = () => {

    
    
 const handleResume=()=>{


    return (
    window.open('https://drive.google.com/file/d/1BSw8HeMUp30gNrzQRFbHE1Vz5nF8BLpm/view')
)
 }

    return (
        <div className='resume'>
        
        <a href="https://drive.google.com/uc?export=download&id=1BSw8HeMUp30gNrzQRFbHE1Vz5nF8BLpm">
        <Button  onClick={handleResume} backgroundColor="orange" fontSize={"23px"} fontWeight="bold" > 
          
            Resume
        </Button>
        </a>
        </div>
    );
};

export default Resume;
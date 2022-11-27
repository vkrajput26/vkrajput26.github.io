import GitHubCalendar from 'react-github-calendar';
import './Git.css'
import ReactTooltip from "react-tooltip"
import React from 'react';

import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}


const Git = () => {
      return (
          <>
          <Desktop>
        <div className='calender-div'>
   <div style={{textAlign:"center", fontSize: "40px" ,marginBottom:"20px" }}>My GitHub Calender</div>
              <div > <GitHubCalendar username="vkrajput26"  year={new Date().getFullYear()}      blockSize={30}
        fontSize={30}  blockMargin={3} >    
  <ReactTooltip delayShow={20} html /> 
        </GitHubCalendar>
              </div>
        </div>
        </Desktop>

        <Tablet>
        <div className='calender-div'>
   <div style={{textAlign:"center", fontSize: "38px" ,marginBottom:"20px" }}>My GitHub Calender</div>
              <div > <GitHubCalendar username="vkrajput26"  year={new Date().getFullYear()}      blockSize={20}
        fontSize={20}  blockMargin={3} >    
  <ReactTooltip delayShow={20} html /> 
        </GitHubCalendar>
              </div>
        </div>
        </Tablet>

        <Mobile>
        <div className='calender-div'>
   <div style={{textAlign:"center", fontSize: "20px" ,marginBottom:"10px",marginTop:"105px" }}>My GitHub Calender</div>
              <div > <GitHubCalendar username="vkrajput26"  year={new Date().getFullYear()}      blockSize={10}
        fontSize={10}  blockMargin={3} >    
  <ReactTooltip delayShow={20} html /> 
        </GitHubCalendar>
              </div>
        </div>
        </Mobile>
   </>      
    );
};

export default Git;

import GitHubCalendar from 'react-github-calendar';
import './Git.css'

import React from 'react';

const Git = () => {
    return (
        <div className='calender-div'>

              <div> <GitHubCalendar username="vkrajput26"  year={new Date().getFullYear()}/>
              </div>
        </div>
        
    );
};

export default Git;

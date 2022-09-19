


import React, { useState } from 'react';
import './Statistics.css'
const info=[
    {
        id:1,
        no_of_hours:'1200+',
        title:"Hours",
        subtitle:"of Full stack Coding",
    },
    {
         id:2,
        no_of_hours:'325+',
        title:"Git",
        subtitle:"Commits",
    },
    {
        id:3,
        no_of_hours:'4+',
        title:"Projects",
        subtitle:"Done",
    },
    {
        id:4,
        no_of_hours:'100+',
        title:"Hours",
        subtitle:"of Soft Skills Sessions",
    }
]


const Statistics = () => {
    const [data,setData]=useState(info)
   console.log(data)
    return (
        <>
        <div className='heading-div' >Statistics</div>
        <div className='main-container'>
          
           {
            data?.map((item)=>{
           return <div className='container' key={item.id} >
                    <div className='hours-div'>{item.no_of_hours}</div>
                    <div className='title-div'>{item.title}</div>
                    <div className='subtitle-div'>{item.subtitle}</div>
           </div>
            })
        }
        </div>
        </>
    );
};

export default Statistics;

import React from "react";
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





const Stats = () => {
    return (
  <>
  <Desktop>
      <div>
        {/* <div style={{textAlign:"center", fontSize: "40px"}}>Statistics</div> */}
        <div style={{ width: "40%", margin: "auto", marginTop:"20px" }}>
          <a href="https://github.com/vkrajput26">
            <img   width={"100%"}
              align="left"
              src="https://github-readme-streak-stats.herokuapp.com/?user=vkrajput26&theme=dark"
            />
          </a>
        </div>

   


        <div
          style={{
            width: "60%",
            height: "270px",
            display: "flex",
            margin: "auto",
            gap:"10%",
          }}
        >
          <div  >
          <a href="https://github.com/vkrajput26">  
            <img style={{marginTop:"20px" , width: "400px"}}
      
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=vkrajput26&theme=dark"  //launguages
            />
          </a>
          </div>
          <div >
          <a href="https://github.com/vkrajput26">
            <img style={{marginTop:"-20px",height:"300px"  }}
              align="left"
              src="https://github-readme-stats.vercel.app/api?username=vkrajput26&count_private=true&show_icons=true&theme=dark" //stats
            />
          </a>
          </div>
        </div>
      </div>
      </Desktop>


      {/* tablet */}
      <Tablet>
      <div>
        {/* <div style={{textAlign:"center", fontSize: "40px"}}>Statistics</div> */}
        <div style={{ width: "40%", margin: "auto", marginTop:"10px" }}>
          <a href="https://github.com/vkrajput26">
            <img   width={"100%"}
              align="left"
              src="https://github-readme-streak-stats.herokuapp.com/?user=vkrajput26&theme=dark"
            />
          </a>
        </div>

   


        <div
          style={{
            width: "80%",
            height: "250px",
            display: "flex",
            margin: "auto",
            gap:"10%",
          }}
        >
          <div  >
          <a href="https://github.com/vkrajput26">  
            <img style={{marginTop:"50px" , width: "400px"}}
      
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=vkrajput26&theme=dark"  //launguages
            />
          </a>
          </div>
          <div >
          <a href="https://github.com/vkrajput26">
            <img style={{marginTop:"-20px",height:"300px"  }}
              align="left"
              src="https://github-readme-stats.vercel.app/api?username=vkrajput26&count_private=true&show_icons=true&theme=dark" //stats
            />
          </a>
          </div>
        </div>
      </div>
      </Tablet>

      {/* mobile */}
      <Mobile>
      <div>
        {/* <div style={{textAlign:"center", fontSize: "40px"}}>Statistics</div> */}
        <div style={{ width: "90%", margin: "auto", marginTop:"10px" }}>
          <a href="https://github.com/vkrajput26">
            <img   width={"100%"}
              align="left"
              src="https://github-readme-streak-stats.herokuapp.com/?user=vkrajput26&theme=dark"
            />
          </a>
        </div>

   


        <div
          style={{
            width: "80%",
            height: "410px",
            display: "grid",
            margin: "auto",
            gap:"10%",
          }}
        >
          <div  >
          <a href="https://github.com/vkrajput26">  
            <img style={{marginTop:"50px" , width: "400px"}}
      
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=vkrajput26&theme=dark"  //launguages
            />
          </a>
          </div>
          <div >
          <a href="https://github.com/vkrajput26">
            <img style={{marginTop:"2px" }}
              align="left"
              src="https://github-readme-stats.vercel.app/api?username=vkrajput26&count_private=true&show_icons=true&theme=dark" //stats
            />
          </a>
          </div>
        </div>
      </div>
      </Mobile>
    </>
    );
  };
  
  export default Stats;
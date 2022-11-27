import React from 'react';
import './Contact.css'
import Email from './Email';
const Contact=(props)=> {
    

        
 const handleResume=()=>{


    return (
    window.open('https://github.com/vkrajput26')
)
    }

    const handleLinkdin=()=>{


        return (
        window.open('https://www.linkedin.com/in/vivek-rajput-34924819b/')
    )
        }
    return (
        <>
        <div className='contact' >
            
            <div className='left-div'>
                <div className='havean-div'>Have an idea</div>
                <div className='inside-text'>Let's Connect</div>
                <br />
                <div className='email-div' >
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnd3o__ddrxq7FolC1DN7pN0bDm0628cyMkv8nRRpXA2Yag86EDDuLRZCJaivCHMEy9pA&usqp=CAU" alt="email-img" width="55px" />  
                      <h1 className='inside-text'>indvivekrajput@gmail.com</h1>  
                </div>

                <div className='phone-div' >
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrEl7B_pdbwrZ3o-1u_P_K-EDf2meqfuDnbRG1ip0hcCYqhwcRr4-gIzuF8JlspLQwOE&usqp=CAU" alt="email-img" width="55px" />  
                      <h1 className='inside-text'> +91 7389243027</h1>  
                </div>

                <div className='phone-div' >
             
                      {/* <a href="https://github.com/vkrajput26" onClick={handleResume} >  */}
                      <img onClick={handleResume} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfC0m7elWmE4H_SjVU4B-h6FDgSmk9JDxAIQ&usqp=CAU" alt="git-img" width="55px" />
                       {/* </a> */}
                       {/* <a href="https://www.linkedin.com/in/vivek-rajput-34924819b/">  */}
                      <img onClick={handleLinkdin}  src="https://static.vecteezy.com/system/resources/thumbnails/008/385/541/small/linkedin-social-media-design-icon-symbol-logo-illustration-free-vector.jpg" alt="git-img" width="65px" />
                       {/* </a> */}
                </div>

            </div>

            <div className='right-div' >
             <Email/>
            </div>
        </div>
            <div className='copyright-div'>
            © 2022 Designed and Built by Vivek Rajput with ❤️
            </div>
        </>
    );
}

export default Contact;
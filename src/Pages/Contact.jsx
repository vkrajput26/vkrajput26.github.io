import React from 'react';
import './Contact.css'
const Contact=(props)=> {
    return (
        <>
        <div className='contact' >
            <div className='left-div'>
                <div>Have an idea</div>
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

            </div>

            <div className='right-div' >
                    <div className='email-input-div'>
                    <label className='inside-text'>Email</label>                 
                    <input className='email-input' type="email" name="" id="" placeholder='Enter Email' />
                    </div>
                    <div className='email-input-div'>
                    <label className='inside-text'>Subject</label>                 
                    <input className='email-input' type="text" name=""   />
                    </div>
                    <div className='message-input-div'>
                    <label className='inside-text'>Message</label>                 
                    <input className='message-input' type="text" name="" />
                    </div>
                    <button className='send-btn'>Send</button>
            </div>
        </div>
            <div className='copyright-div'>
            © 2022 Designed and Built by Vivek Rajput with ❤️
            </div>
        </>
    );
}

export default Contact;
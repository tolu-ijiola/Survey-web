import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/logo.png'
import Slide from 'react-reveal/Slide';
import Dropdown from '../component/dropdown';
import Zoom from 'react-reveal/Zoom';

function Contact() {

  return (
    <div className='home contact'>
        <div className='showcase-text'>
        
         <header>
            <Link to={"/"} className="homepage">
              <img src={logo} alt='logo' />
              <h5>MyCash Surveys</h5>
            </Link>
            <div className='nav '>
              <Link to={"/"} className="download-btn">Download</Link>
            </div>
          </header>
    </div>
    <Zoom>
    <div className='contact-tab'>
        <h1>Love to hear from you,</h1>
        <h1>Get in touch 👋</h1>
        <form className='contact-form'>
            <div className='split-input'>
                <div>
                    <label>Name</label>
                    <input placeholder='Your name e.g john doe'/>
                </div>
                <div>
                    <label>Email Address</label>
                    <input placeholder='Your email address e.g johndoe@example.com'/>
                </div>
                
                </div>
                
                <div>
                    <label>Message</label>
                    <textarea placeholder='Your message here' rows={5}/>
                </div>
                <button>Let's send 🚀🚀🚀</button>
        </form>
    </div>
    </Zoom>
    </div>
  )
}

export default Contact
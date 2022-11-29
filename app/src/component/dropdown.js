import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/logo.png'

function Dropdown(props) {
    return (
        <div className='mob-nav'>
            <div ref={props.refi}>
            <div className='mob-nav-head'>
                <Link to={"/"} className="homepage">
                    <img src={logo} alt='logo' />
                    <h5>MyCash Surveys</h5>
                </Link>
                <i onClick={props.toggleShow} class="fa-solid fa-xmark"></i>
            </div>
            <div className='mobile-nav'>
            <Link to={"/"} onClick={props.work}>How it works</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/"} onClick={props.faq}>Faq</Link>
            </div>
            <a className='download'>Download now</a>
            </div>
        </div>
    )
}

export default Dropdown
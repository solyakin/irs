import React from 'react';
import '../homepage/homepage.css';
import logo from '../../assets/logo.svg';
import core from '../../assets/Group 1.png';
import wood from '../../assets/wood.png';
import primeraLogo from '../../assets/image 2.png';

const Homepage = () => {
    return(
        <div className="homepage">
            <div className="container_">
                <div className="primera-bg-logo">
                    <img src={primeraLogo} alt="primera logo" />
                </div>
                <div className="inner-wrapper text d-flex align-item-center justify-content-center">
                    <div className="form-wrapper">
                        <div className="logo">
                            <img src={logo} alt="primera logo" />
                            <p>kindly login with your username and password.</p>
                        </div>
                        <form action="">
                            <input type="text" placeholder='username' />
                            <input type="password" placeholder='password' />
                            <button>Login</button>

                            <p className='forget'>Forgot Password? Please click here to change or retrieve your password.</p>

                            <button className='register'>New on IRS, Please click here to register.</button>
                        </form>
                    </div>
                    <div className="primera-ring">
                        <img src={wood} alt="wood" className='wood' />
                        <div className="overlay-shade"></div>
                        <div className="content">
                            <h3>Welcome to Primera <br></br> <span>Internal Resource Stream (IRS)</span></h3>
                            <img src={core} alt="primera core values" className='core' />
                            <p className='core-text'>Our core values</p>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>  © 2022 Primera Microfinancebank. All rights reserved </p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
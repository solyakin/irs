import React from 'react';
import '../forget-password/forget-password.css';
import logo from '../../assets/logo.svg';
import primeraBackground from '../../assets/image 2.png'

const ForgetPassword = () => {
  return (
    <div className='forget-password'>
        <div className="overlay"></div>
        <div className="main-wrapper">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-8">
                    <h3>Welcome to Primera Internal Resource Stream (IRS)</h3>
                    <div className="white-wrapper">
                        <form action="">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <p>Forgot your password? enter your email and we'll send you a link you can use to pick a new password.</p>
                            <input type="email" placeholder='Email-address' />

                            <button>Reset Password</button>
                            <button>Back to login</button>
                        </form>
                    </div>
                    <div className="copyright">
                        <p> © 2022 Primera Microfinancebank. All rights reserved </p>
                    </div>
                </div>
            </div>
            <div className="outer-bg align-items-center">
                <div className="bg-container">
                    <div className="blank"></div>
                    <div className="prim-logo">
                        <img src={primeraBackground} alt="primera logo" />
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default ForgetPassword;
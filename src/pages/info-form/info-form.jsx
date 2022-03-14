import React from 'react'
import '../info-form/info-form.css';
import '../forget-password/forget-password.css';
import logo from '../../assets/logo.svg';
import primeraBackground from '../../assets/image 2.png'

const InformationForm = () => {
  return (
    <div className='info_form'>
        <div className="overlay"></div>
        <div className="main-content">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <h3>Welcome to Primera Internal Resource Stream (IRS)</h3>
                    <div className="white-wrapper">
                        <form action="">
                            <div className="logo">
                                <img src={logo} alt="primera logo" />
                                <p>kindly fill in the accurate information.</p>
                            </div>
                            <input type="email" placeholder='official Email-address' />
                            <input type="password" placeholder='password' />
                            <p>Hint: The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).</p>
                            <input type="password" placeholder='password confirmation' />

                            <h4>Profile details</h4>
                            <input type="text" placeholder='First name' />
                            <input type="text" placeholder='Middle name' />
                            <input type="text" placeholder='Last name' />
                            <select name="location" id=""> 
                                <option value="Lagos">Enter Location</option> 
                                <option value="Lagos">Lagos</option>
                                <option value="Abuja">Abuja</option>
                                <option value="Port Harcourt">Port Harcourt</option>
                                <option value="Ibadan">Ibadan</option>
                                <option value="Kano">Kano</option>
                            </select>
                            <p>Note: Another staff cannot see your location(private), please make sure this address is valid for Google Map.</p>

                            <div className="date">
                                <div className="form-group d-flex align-items-center justify-content-center">
                                    <label htmlFor="Birthday">Birthday</label>
                                    <input type="number" name="" id="" />
                                    <input type="number" name="" id="" />
                                    <input type="number" name="" id="" />
                                </div>
                                
                                <p>Note:  We will only use it for the Birthday Notification, so we can celebrate everyone's birthday. Others cannot see your age. this has been set to be invisible to others except you.</p>
                            </div>
                            <input type="text" placeholder="location" />
                            {/* <div className="form_group">
                               
                            </div> */}
                            <button className='mt-5'>Reset Password</button>
                            <button>Back to login</button>
                        </form>
                    </div>
                    <div className="copyright">
                        <p> © 2022 Primera Microfinancebank. All rights reserved </p>
                    </div>
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
  )
}

export default InformationForm
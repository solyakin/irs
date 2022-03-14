import React from 'react';
import '../header/header.css';
import logo from '../../assets/image 1.png';
import notification from '../../assets/Notification.png';
import logout from '../../assets/Logout1.png';
import hamburger from '../../assets/Group 12.svg';
import search from '../../assets/search.svg';

const Header = () => {
  return (
    <div className='header'>
         <div className="container">
             <div className="outer-wrapper d-flex align-items-center justify-content-between">
                <div className="left-content d-flex">
                    <img src={logo} width="110px" alt="Primera Africa IRS logo" />
                    <p>Welcome To IRS, Jane</p>
                </div>
                <div className="right-content d-flex align-items-center justify-content-between">
                    <div className="search-box">
                        <img src={search} alt="search spyglass icon" />
                        <input type="text"  placeholder='Search IRS'/>
                    </div>
                    <div className="btns d-flex align-items-center justify-content-between">
                        <img src={notification} alt="" />
                        <img src={hamburger} alt="" />
                        <img src={logout} alt="" />
                    </div>
                </div>
             </div>
         </div>
    </div>
  )
}

export default Header
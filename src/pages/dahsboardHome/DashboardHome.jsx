import React from 'react'
import Header from '../../components/header/header';
import '../dahsboardHome/style.css';
import staff from '../../assets/image 6.svg';
import helpDesk from '../../assets/image 7.svg';
import worktool from '../../assets/image 8.svg';
import academy from '../../assets/image 9.svg';
import document from '../../assets/image 10.svg';
import galary from '../../assets/image 11.svg';
import compliance from '../../assets/Compliance 1.svg';
import speaker from '../../assets/image 4.svg';
import BirthdayCard from '../../components/BirthdayCard/BirthdayCard';

const DashboardHome = () => {
  return (
    <div className='dashboard-home'>
        <Header />
        <div className="dashboard">
            <div className="container">
                <div className="dashboard-wrapper">
                    <div className="actions">
                        <div className="action-btns">
                            <div className="staff-wrapper">
                                <img src={staff} alt="" />
                                <p>STAFF</p>
                            </div>
                            <div className="help-wrapper">
                                <img src={helpDesk} alt="" />
                                <p>HELP DESK</p>
                            </div>
                            <div className="work-wrapper">
                                <img src={worktool} alt="" />
                                <p>WORK TOOL</p>
                            </div>
                            <div className="academy-wrapper">
                                <img src={academy} alt="" />
                                <p>PRIMERA <br></br> ACADEMY</p>
                            </div>
                            <div className="document-wrapper">
                                <img src={document} alt="" />
                                <p>DOCUMENT</p>
                            </div>
                            <div className="gallery-wrapper">
                                <img src={galary} alt="" />
                                <p>GALLERY</p>
                            </div>
                            <div className="compliance-wrapper">
                                <img src={compliance} alt="" />
                                <p>COMPLIANCE</p>
                            </div>
                        </div>
                        <div className="banner d-flex">
                            <img src={speaker} alt="icon of megaphone" />
                            <div className="banner-text">
                                <h4>PRIMERA MFB INTERNAL COMMUNICATION</h4>
                                <p>is a one stop solution for employees where all banking operations will be conducted. All the bank’s existing applications such as the core banking, communication, loan processing and disbursement will be assessed on IRS.</p>
                            </div>
                        </div>
                    </div>
                    <BirthdayCard />
                </div>
                <p className='cp'> © 2022 Primera Microfinancebank. All rights reserved </p>
            </div>
        </div>
    </div>
  )
}

export default DashboardHome
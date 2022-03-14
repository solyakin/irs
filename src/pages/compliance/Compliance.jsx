import React from 'react';
import '../dahsboardHome/style.css';
import '../DocumentComponent/document.css';
import BirthdayCard from '../../components/BirthdayCard/BirthdayCard';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import speaker from '../../assets/image 4.svg';
import arrowleft from '../../assets/arrow.svg';

const Compliance = () => {
  return (
    <div className='document staff'>
            <div className="main_wrapper">
            <Header />
            <div className="dashboard-content">
                <div className="container">
                    <div className="dashboard-inner-wrapper">
                        <div className="documents-wrapper">
                            <div className="heading">
                                <img src={arrowleft} alt="arrow left icon" />
                                <h5>COMPLIANCE</h5>
                            </div>
                            <div className="document-tab-wrapper">
                                <div className="document-tabs">
                                    <div className='box-blue'>
                                        <p>WHISTLE BLOWING POLICY</p>
                                    </div>
                                    <div className='box-red'>
                                        <p>STAFF SUGGESTION PORTAL</p>
                                    </div>
                                    <div className='box-green'>
                                        <p>INCIDENT REPORT FORM</p>
                                    </div>
                                </div>
                                <div className="lower-message d-flex align-items-center">
                                    <img src={speaker} width="70px" alt="loud speaker icon" />
                                    <p>Remember Primera's information and data security depends on you. Kindly ensure all data and information are properly handled with due diligence.</p>
                                </div>
                            </div>
                        </div>
                        <BirthdayCard />
                    </div>
                </div>
            </div>
            <Footer />
            </div>
        </div>
  )
}

export default Compliance
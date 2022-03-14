import React from 'react';
import '../userProfile/userProfile.css';
import bg from '../../assets/citybg.png';
import user from '../../assets/user-img.png';
import logo from '../../assets/image 3.svg';
import editButton from '../../assets/Group 13.svg';

const UserProfile = () => {
  return (
    <div className='user-profile'>
        <div className="container">
            <div className="wrapper">
                <div className="profile-card">
                    <div className="content">
                        <div className="image-card">
                            <div className="bg-cover">
                                <img src={bg} alt="a city in paris" />
                            </div>
                            <div className="user-image">
                                <img src={user} alt="black woman smiling" />
                            </div>
                        </div>
                        <div className="info-card-wrapper">
                            <div className="name d-flex align-items-center justify-content-between">
                                <h3>Jane Doe</h3>
                                <img src={editButton} alt="edit button icon" />
                            </div>
                            <div className="info-card">
                                <div className="portfolio">
                                    <ul>
                                        <li>Graphic Design, Social Media and Communications Officer</li>
                                        <li>Brand & Communications Department</li>
                                        <li>Senior Banking Officer 1</li>
                                        <li>djane@primerabank.com</li>
                                        <li>08099813621</li>
                                    </ul>
                                </div>
                                <div className="superior-officer">
                                    <h3>Supervisor</h3>
                                    <p>Awele Akemu</p>
                                    <p>aakemu@primerabank.com</p>
                                </div>
                            </div>
                            <button>More info</button>
                        </div>
                    </div>
                </div>

                <div className="irs-value-card">
                    <div className="content">
                        <img src={logo} alt="primera logo" />
                        <p>is a one stop solution for employees where all banking operations will be conducted. All the bank’s existing applications such as the core banking, communication, loan processing and disbursement will be assessed on IRS.</p>
                        <p>This solution also serves as a work flow tool that automates business processes related to Human Resources, Administration, IT, Finance, Communication, Documentation and Project Management activities. Launched October 2018.</p>

                        <h4>Our Values</h4>
                        <ul>
                            <li>Accountability</li>
                            <li>Respect</li>
                            <li>Innovation</li>
                            <li>Creativity</li>
                            <li>Passion</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfile;
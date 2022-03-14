import React from 'react';
import '../Leave/Leave.css';
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import LeaveDashboard from '../../components/LeaveDashboard/LeaveDashboard';
import BirthdayCard from '../../components/BirthdayCard/BirthdayCard';

const Leave = () => {
  return (
    <div className='leave'>
        <Header />
        <div className="container">
            <div className="content">
                <LeaveDashboard />
                <BirthdayCard />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Leave
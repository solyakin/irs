import React from 'react'
import '../HelpDeskDashboard/HelpDeskDashboard.css';
import BirthdayCard from '../../components/BirthdayCard/BirthdayCard'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import HelpDeskComponent from '../../components/HelpDeskComponent/HelpDeskComponent'

const HelpDeskDashboard = () => {
  return (
    <div className='helpdesk-dashobard'>
        <Header />
        <div className="container">
            <div className="content">
                <HelpDeskComponent />
                <BirthdayCard />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HelpDeskDashboard
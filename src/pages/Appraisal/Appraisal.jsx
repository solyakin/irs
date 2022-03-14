import React from 'react';
import '../Appraisal/appraisal.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import AppraisalDashboard from '../../components/AppraisalDashboard/AppraisalDashboard';

const Appraisal = () => {
  return (
    <div className='appraisal'>
        <Header />
        <AppraisalDashboard />
        <Footer />
    </div>
  )
}

export default Appraisal
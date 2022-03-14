import React from 'react';
import '../Interview/interview.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import InterviewForm from '../../components/InterviewForm/InterviewForm';

const Interview = () => {
  return (
    <div className='interview'>
        <Header />
        <div className="container">
            <div className="content">
                <InterviewForm />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Interview
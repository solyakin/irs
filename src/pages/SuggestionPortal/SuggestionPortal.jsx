import React from 'react';
import '../SuggestionPortal/suggestionPortal.css';
import BirthdayCard from '../../components/BirthdayCard/BirthdayCard'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import SuggestionForm from '../../components/SuggestionForm/SuggestionForm'
import TokenBlueCard from '../../components/TokenBlueCard/TokenBlueCard'

const SuggestionPortal = () => {
  return (
    <div className='suggestion-portal'>
        <Header />
        <div className="container">
          <div className="heading-msg">
            <h4>STAFF SUGGESTION PORTAL</h4>
            <p>The Primera MFB Suggestions Portal is a mechanism to obtain constructive feedback, suggestions, ideas, and/or complaints from employees and utilizes this input from employees to improve revenue generation, cost savings, workplace efficiency, product quality & development, and customer service.</p> 
            <p>This portal is easy to use and allows users to provide feedback anonymously.”</p>
          </div>
          <div className="content">
              <TokenBlueCard/>
              <SuggestionForm />
              <BirthdayCard />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default SuggestionPortal;
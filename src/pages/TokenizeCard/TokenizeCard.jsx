import React from 'react';
import '../TokenizeCard/Tokenize-card.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import TokenBlueCard from '../../components/TokenBlueCard/TokenBlueCard';
import BirthdayCard from '../../components/BirthdayCard/BirthdayCard';
import TokenizeCustomerCard from '../../components/TokenizeCustomerCard/TokenizeCustomerCard';

const TokenizeCard = () => {
  return (
    <div className="tokenize-card">
        <Header />
        <div className="container">
            <div className="content">
                <TokenBlueCard />
                <TokenizeCustomerCard />
                <BirthdayCard />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default TokenizeCard
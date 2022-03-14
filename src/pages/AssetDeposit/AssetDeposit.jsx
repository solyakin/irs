import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import '../AssetDeposit/asset.style.css';
import BirthdayCard from '../../components/BirthdayCard/BirthdayCard'
import TokenBlueCard from '../../components/TokenBlueCard/TokenBlueCard'
import AssetDisposalForm from '../../components/AssetDisposalForm/AssetDisposalForm';

const AssetDeposit = () => {
  return (
    <div className='asset-deposit'>
        <Header />
        <div className="container">
          <div className="content">
              <TokenBlueCard/>
              <AssetDisposalForm />
              <BirthdayCard />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default AssetDeposit
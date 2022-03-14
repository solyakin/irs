import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import IDFORM from '../../components/id-form/ID-Form';
import '../IDCARD/idcard.css';

const IDCARD = () => {
  return (
    <div className='id-card'>
        <Header/>
        <IDFORM />
        <Footer/>
    </div>
  )
}

export default IDCARD
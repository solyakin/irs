import React from 'react';
import '../AssetDisposalForm/disposal-form.css';

const AssetDisposalForm = () => {
  return (
    <div className='asset-disposal-form'>
        <form action="">
            <h4>Asset Disposal</h4>
            <input type="text"  placeholder='Full Name'/>
            <input type="text"  placeholder='Department'/>
            <input type="text"  placeholder='Official Email'/>
            <button>Start</button>
        </form>
    </div>
  )
}

export default AssetDisposalForm;
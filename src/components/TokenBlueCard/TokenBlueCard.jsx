import React from 'react';
import '../TokenBlueCard/tokenbluecard.css';

const TokenBlueCard = () => {
  return (
    <div className='token-blue-card'>
        <div className="rowOn">
            <div className="blue-box">
                <p>CUSTOMER NOTIFICATION</p>
            </div>
            <div className="green-box">
                <p>T-24</p>
            </div>
        </div>
        <div className="rowOn">
            <div className="yellow-box">
                <p>ACCOUNT STATEMENT</p>
            </div>
            <div className="lightblue-box">
                <p>FAST TRACK</p>
            </div>
        </div>
        <div className="rowOn">
            <div className="lightgreen-box">
                <p>IPPIS/ORACLE PAYSLIP</p>
            </div>
            <div className="lightyellow-box">
                <p>BOARDROOM BOOKINGS</p>
            </div>
        </div>
    </div>
  )
}

export default TokenBlueCard
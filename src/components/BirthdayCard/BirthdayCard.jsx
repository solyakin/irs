import React from 'react';
import birthday from '../../assets/Birthday icon.svg';
import birthdayMix from '../../assets/Birthday mix.svg';
import user from '../../assets/image 12.svg';

const BirthdayCard = () => {
  return (
    <div className='birthday-card'>
        <div className="birthday-card">
            <div className="heading d-flex align-items-center">
                <img src={birthday} alt="birthdat cake with candle icon" />
                <h4>Upcoming <br></br>Birthdays</h4>
            </div>
            <div className="birthday-list">
                <div className="birthday d-flex align-items-center">
                    <div className="info-wrapper d-flex align-items-center">
                        <img src={user} alt="a woman" />
                        <div className="user-info">
                            <p className='name'>Juliet Mbanuchi</p>
                            <p className='dob'>31- May - 2021</p>
                        </div>
                    </div>
                    <img src={birthdayMix} className="birthday-mix" alt="birthday mix with candle icon" />
                </div>
                <div className="birthday d-flex align-items-center">
                    <div className="info-wrapper d-flex align-items-center">
                        <img src={user} alt="a woman" />
                        <div className="user-info">
                            <p className='name'>Juliet Mbanuchi</p>
                            <p className='dob'>31- May - 2021</p>
                        </div>
                    </div>
                    <img src={birthdayMix} className="birthday-mix" alt="birthday mix with candle icon" />
                </div>
                <div className="birthday d-flex align-items-center">
                    <div className="info-wrapper d-flex align-items-center">
                        <img src={user} alt="a woman" />
                        <div className="user-info">
                            <p className='name'>Juliet Mbanuchi</p>
                            <p className='dob'>31- May - 2021</p>
                        </div>
                    </div>
                    <img src={birthdayMix} className="birthday-mix" alt="birthday mix with candle icon" />
                </div>
                <div className="birthday d-flex align-items-center">
                    <div className="info-wrapper d-flex align-items-center">
                        <img src={user} alt="a woman" />
                        <div className="user-info">
                            <p className='name'>Juliet Mbanuchi</p>
                            <p className='dob'>31- May - 2021</p>
                        </div>
                    </div>
                    <img src={birthdayMix} className="birthday-mix" alt="birthday mix with candle icon" />
                </div>
                <div className="birthday d-flex align-items-center">
                    <div className="info-wrapper d-flex align-items-center">
                        <img src={user} alt="a woman" />
                        <div className="user-info">
                            <p className='name'>Juliet Mbanuchi</p>
                            <p className='dob'>31- May - 2021</p>
                        </div>
                    </div>
                    <img src={birthdayMix} className="birthday-mix" alt="birthday mix with candle icon" />
                </div>
                <div className="birthday d-flex align-items-center">
                    <div className="info-wrapper d-flex align-items-center">
                        <img src={user} alt="a woman" />
                        <div className="user-info">
                            <p className='name'>Juliet Mbanuchi</p>
                            <p className='dob'>31- May - 2021</p>
                        </div>
                    </div>
                    <img src={birthdayMix} className="birthday-mix" alt="birthday mix with candle icon" />
                </div>
                <div className="birthday d-flex align-items-center">
                    <div className="info-wrapper d-flex align-items-center">
                        <img src={user} alt="a woman" />
                        <div className="user-info">
                            <p className='name'>Juliet Mbanuchi</p>
                            <p className='dob'>31- May - 2021</p>
                        </div>
                    </div>
                    <img src={birthdayMix} className="birthday-mix" alt="birthday mix with candle icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BirthdayCard
import React from 'react'
import '../BoardroomBoardingComponent/boardroom-component.css';

const BoardroomBoardingComponent = () => {
  return (
    <div className='boardroom-com'>
        <form action="">
            <div className="notice">
                <p>Fields marked with an <span>*</span> are required<br></br>IN THE BID TO ENSURE PROPER COORDINATION AND USE OF THE BOARDROOM, ALL STAFF MEMBERS ARE REQUIRED TO MAKE RESERVATIONS FOR THE USE OF THE BOARDROOM A DAY BEFORE USE.</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Type of Meeting <span>*</span></label>
                <input type="text" placeholder='Internal Stakeholders'/>
            </div>
            <div className="form-group">
                <label htmlFor="">Department <span>*</span></label>
                <input type="text" placeholder='Department'/>
            </div>
            <div className="form-group">
                <label htmlFor="">Date for Board Room Use <span>*</span></label>
                <input type="text" placeholder='Wednesday, January 20, 2022'/>
            </div>
            <div className="form-group">
                <label htmlFor="">Duration Meeting (Start - End Time) <span>*</span></label>
                <input type="text" placeholder='12PM -4PM'/>
            </div>
            <div className="form-group">
                <label htmlFor="">Title/Purpose of Meeting<span>*</span></label>
                <input type="text" placeholder=''/>
            </div>
            <button type="submit">Book Now</button>
        </form>
    </div>
  )
}

export default BoardroomBoardingComponent
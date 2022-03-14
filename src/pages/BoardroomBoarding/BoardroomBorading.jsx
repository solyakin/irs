import React from 'react';
import '../BoardroomBoarding/boardroom.css';
import BoardroomBoardingComponent from '../../components/BoardroomBoardingComponent/BoardroomBoardingComponent'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

const BoardroomBorading = () => {
  return (
    <div className='boarding-room'>
        <Header />
        <div className="content">
            <div className="container">
                <BoardroomBoardingComponent />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default BoardroomBorading
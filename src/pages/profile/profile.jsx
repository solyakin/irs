import React from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import UserProfile from '../../components/userProfile/userProfile'

const Profile = () => {
  return (
    <div className='profile'>
        <Header />
        <UserProfile />
        <Footer />
    </div>
  )
}

export default Profile
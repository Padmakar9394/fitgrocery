import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Nav';
import Footer1 from '../../Components/Footer/Footer1';
import Footer2 from '../../Components/Footer/Footer2';
import SingleBanner from '../../Components/Banners/SingleBanner';
import UserSidebar from '../../Components/UserProfile/UserSidebar';
import AccoutSettings from '../../Components/UserProfile/AccoutSettings';

import "./UserProfile.css";
import ChangePassword from '../../Components/UserProfile/ChangePassword';
import MyOrders from '../../Components/UserProfile/MyOrders';
import UserAddress from '../../Components/UserProfile/UserAddress';
import LegalNotice from '../../Components/UserProfile/LegalNotice';

const UserProfile = () => {
    const {activepage} = useParams();
    // alert(activepage);
  return (
    <div className='userprofile'>
        <Navbar />
        <SingleBanner heading={'My Profile'} bannerImage='https://images.unsplash.com/photo-1694384159175-9365bf093a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60' />
        <div className='userprofilein'>
            <div className='left'>
                <UserSidebar activepage={activepage} />
            </div>
            <div className='right'>
                {activepage === 'accountsettings' && <AccoutSettings />}
                {activepage === 'changepassword' && <ChangePassword />}
                {activepage === 'yourorders' && <MyOrders />}
                {activepage === 'address' && <UserAddress />}
                {activepage === 'legalnotice' && <LegalNotice />}
            </div>
        </div>
        <Footer1 />
        <Footer2 />
    </div>
  )
}

export default UserProfile;
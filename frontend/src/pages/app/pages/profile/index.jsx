import React from 'react';

import './profile.css';

import ProfileSidebar from './components/ProfileSidebar';

import BookedRides from './components/BookedRides';

function Profile() {
  return (
    <div className="section profile_container ">
      <ProfileSidebar />
      <BookedRides />
    </div>
  );
}

export default Profile;

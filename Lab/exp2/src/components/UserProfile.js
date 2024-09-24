// src/components/UserProfile.js
import React from 'react';
import './UserProfile.css';

const UserProfile = ({ name, age, bio, location, profilePicture }) => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
        <h1>{name}</h1>
      </div>
      <div className="profile-details">
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Bio:</strong> {bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;

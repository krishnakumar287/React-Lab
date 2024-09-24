// src/App.js
import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  const user = {
    name: 'Krishnakumar',
    age: 19,
    bio: 'A passionate developer who loves building amazing web applications.',
    location: 'India',
    profilePicture: 'https://via.placeholder.com/150'
  };

  return (
    <div className="App">
      <UserProfile
        name={user.name}
        age={user.age}
        bio={user.bio}
        location={user.location}
        profilePicture={user.profilePicture}
      />
    </div>
  );
}

export default App;

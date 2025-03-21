import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Authen/Auth.jsx';
import HabitTracker from './components/HabitTracker.jsx';
import SocialFeed from './components/SocialFeed.jsx';
import UserProfile from './components/UserProfile.jsx';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    localStorage.setItem('user', username);
    setUser(username);
    window.location.href = '/habits';
  };

  const handleRegister = (mobile) => {
    localStorage.setItem('user', mobile);
    setUser(mobile);
    window.location.href = '/habits';
  };

  return (
    <Router>
      <div>
        {user ? (
          <p>Welcome, {user}!</p>
        ) : (
          <Routes>
            <Route path="/" element={<Auth onLogin={handleLogin} onRegister={handleRegister} />} />
            <Route path="/habits" element={<HabitTracker />} />
            <Route path="/feed" element={<SocialFeed />} />
            <Route path="/profile/:username" element={<UserProfile />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
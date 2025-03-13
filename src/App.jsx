import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth.jsx';
import HabitTracker from './components/HabitTracker.jsx';
import SocialFeed from './components/SocialFeed.jsx';
import UserProfile from './components/UserProfile.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/habits" element={<HabitTracker />} />
                <Route path="/feed" element={<SocialFeed />} />
                <Route path="/profile/:username" element={<UserProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
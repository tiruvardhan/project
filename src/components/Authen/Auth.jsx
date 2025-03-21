import React, { useState } from 'react';
import Puppet from '../Puppet/Puppet'; // Corrected import path

function Auth() {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState('login');

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : {};

    if (mode === 'login') {
      if (users[username] && users[username].mobile === mobile) {
        localStorage.setItem('currentUser', username);
        window.location.href = '/habits';
      } else {
        alert('Wrong username or mobile number');
      }
    } else {
      if (Object.values(users).some((user) => user.mobile === mobile)) {
        alert('Mobile number already exists');
      } else {
        users[username] = { mobile: mobile, email: email };
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', username);
        window.location.href = '/habits';
      }
    }
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  return (
    <div className="vh-100 d-flex">
      <div className="flex-grow-1 puppet-area">
        <Puppet />
      </div>
      <div className="d-flex justify-content-center align-items-center w-50 pe-5">
        <div className="p-4 rounded-3 w-75 custom-form-box">
          <h1 className="text-center mb-4 text-white">
            {mode === 'login' ? 'Login' : 'Register'}
          </h1>
          <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
            {mode === 'login' && (
              <div className="d-flex align-items-center justify-content-between mb-3 w-100">
                <label htmlFor="username" className="me-2 text-white">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control line-bar flex-grow-1 me-2"
                />
                <i className="fas fa-user text-white"></i>
              </div>
            )}
            <div className="d-flex align-items-center justify-content-between mb-3 w-100">
              <label htmlFor="mobile" className="me-2 text-white">
                Mobile Number:
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder=""
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="form-control line-bar flex-grow-1 me-2"
              />
              <i className="fas fa-mobile-alt text-white"></i>
            </div>
            {mode === 'register' && (
              <div className="d-flex align-items-center justify-content-between mb-3 w-100">
                <label htmlFor="email" className="me-2 text-white">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control line-bar flex-grow-1 me-2"
                />
                <i className="fas fa-envelope text-white"></i>
              </div>
            )}
            <button type="submit" className="btn btn-primary w-50">
              {mode === 'login' ? 'Login' : 'Register'}
            </button>
          </form>
          <p className="text-center mt-3">
            {mode === 'login' ? (
              <>
                Need an account?{' '}
                <button type="button" onClick={toggleMode} className="btn btn-link">
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button type="button" onClick={toggleMode} className="btn btn-link">
                  Login
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
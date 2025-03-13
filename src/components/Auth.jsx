import React, { useState } from 'react';

function Auth() {
    // State variables for username, password, and mode (login/register)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mode, setMode] = useState('login'); // 'login' or 'register'

    // Function to handle login and registration
    const handleSubmit = (event) => {
        event.preventDefault(); // Stop the page from reloading

        const storedUsers = localStorage.getItem('users');
        const users = storedUsers ? JSON.parse(storedUsers) : {};

        if (mode === 'login') {
            // Login logic
            if (users[username] && users[username].password === password) {
                localStorage.setItem('currentUser', username);
                window.location.href = '/habits';
            } else {
                alert('Wrong username or password');
            }
        } else {
            // Registration logic
            if (users[username]) {
                alert('Username already exists');
            } else {
                users[username] = { password: password };
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('currentUser', username); // Log in the new user
                window.location.href = '/habits';
            }
        }
    };

    // Function to toggle between login and register modes
    const toggleMode = () => {
        setMode(mode === 'login' ? 'register' : 'login');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Optional: Center vertically on the page
        }}>
            <div style={{
                border: '1px solid #ccc', // Optional: Add a border
                padding: '20px', // Optional: Add some padding
                borderRadius: '8px', // Optional: Round the corners
            }}>
                <h1>{mode === 'login' ? 'Login' : 'Register'}</h1>
                <form className="" onSubmit={handleSubmit}>
                    <center>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">
                            {mode === 'login' ? 'Login' : 'Register'}
                        </button>
                    </center>
                </form>
                <p>
                    {mode === 'login' ? (
                        <>
                            Need an account?{' '}
                            <button type="button" onClick={toggleMode}>
                                Register
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <button type="button" onClick={toggleMode}>
                                Login
                            </button>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}

export default Auth;
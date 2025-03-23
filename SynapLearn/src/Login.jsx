import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (formData.username === storedUsername && formData.password === storedPassword) {
            alert('Login successful!');
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userDetails', JSON.stringify(formData));

            navigate('/dashboard');
            window.location.reload(); // ✅ Refresh Navbar
        } else {
            alert('Invalid username or password');
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        localStorage.setItem('username', formData.username);
        localStorage.setItem('email', formData.email);
        localStorage.setItem('password', formData.password);
        alert('Sign-up successful! You can now log in.');
        setIsSignUp(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            {!isSignUp ? (
                <div>
                    <h2>Welcome</h2>
                    <button onClick={() => setIsSignUp(true)}>New User</button>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label>Username: </label>
                            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSignUp}>
                        <div>
                            <label>Username: </label>
                            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;

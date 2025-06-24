import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add real login validation (API, etc)
    navigate('/');  // Redirect to home page on success
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <h2>Welcome Back!</h2>
          <p>Get started with your BuildLink account.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>

      <div className="social-login-section">
        <p>Or sign in using</p>
        <div className="social-buttons">
          <button
            type="button"
            className="social-btn google"
            aria-label="Sign in with Google"
            onClick={() => alert('Google login clicked')}
          >
            <FaGoogle size={24} style={{ marginRight: '10px' }} />
            Sign in with Google
          </button>

          <button
            type="button"
            className="social-btn facebook"
            aria-label="Sign in with Facebook"
            onClick={() => alert('Facebook login clicked')}
          >
            <FaFacebookF size={24} style={{ marginRight: '10px' }} />
            Sign in with Facebook
          </button>

          <button
            type="button"
            className="social-btn twitter"
            aria-label="Sign in with Twitter"
            onClick={() => alert('Twitter login clicked')}
          >
            <FaTwitter size={24} style={{ marginRight: '10px' }} />
            Sign in with Twitter
          </button>

          <button
            type="button"
            className="social-btn linkedin"
            aria-label="Sign in with LinkedIn"
            onClick={() => alert('LinkedIn login clicked')}
          >
            <FaLinkedinIn size={24} style={{ marginRight: '10px' }} />
            Sign in with LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (password === '12345') {
      onLogin('admin');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src="/logo.png" alt="BookSwap NIT" className="login-logo" />
        <h1 className="login-title">Welcome to BookSwap</h1>
        <p className="login-desc">The exclusive campus network for NIT Rourkela students to share books.</p>
        
        {!showPassword ? (
          <div className="login-actions">
            <button className="btn-guest" onClick={() => onLogin('guest')}>
              Continue as Guest
            </button>
            <button className="btn-admin" onClick={() => setShowPassword(true)}>
              Login as Admin
            </button>
          </div>
        ) : (
          <form className="password-container" onSubmit={handleAdminLogin}>
            <input 
              type="password" 
              className="admin-input" 
              placeholder="Enter Admin Password" 
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              autoFocus
            />
            {error && <div style={{color: 'red', fontSize: '0.85rem', textAlign: 'left', fontWeight: '500'}}>{error}</div>}
            <button type="submit" className="btn-submit">Sign In</button>
            <button type="button" className="btn-guest" style={{marginTop: '8px'}} onClick={() => setShowPassword(false)}>
              Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

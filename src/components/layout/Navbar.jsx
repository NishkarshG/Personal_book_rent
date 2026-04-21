import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ role, setRole }) {
  const loc = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user_role');
    setRole(null);
  };
  
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="nav-brand" style={{textDecoration: 'none', color: 'var(--text-main)', display: 'flex', alignItems: 'center'}}>
          <img src="/logo.png" alt="BookSwap NIT Rourkela" style={{height: '32px', width: 'auto'}} />
        </Link>
        
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={loc.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Browse</Link>
          <Link to="/orders" className={loc.pathname === '/orders' ? 'active' : ''} onClick={() => setMenuOpen(false)}>My Orders</Link>
          {role === 'admin' && (
            <>
              <a href="#" onClick={() => setMenuOpen(false)}>Seller Dashboard</a>
              <a href="#" onClick={() => setMenuOpen(false)}>Admin</a>
            </>
          )}
          <a href="#" onClick={handleLogout} style={{color: 'var(--text-light)'}}>Logout</a>
        </div>

        <div className="nav-right">
          <div className="nav-icons">
            <Link to="/search" className="icon-btn search-icon-mobile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </Link>
            <Link to="/cart" className="icon-btn" style={{textDecoration: 'none'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span className="badge">1</span>
            </Link>
            <Link to="/notifications" className="icon-btn" style={{textDecoration: 'none'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <span className="badge">12</span>
            </Link>
          </div>
          
          <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

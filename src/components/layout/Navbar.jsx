import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const loc = useLocation();
  
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="nav-brand" style={{textDecoration: 'none', color: 'var(--text-main)'}}>
          <span className="brand-text">BookSwap <span style={{fontWeight: 500, color: 'var(--text-light)', fontSize: '0.9rem', marginLeft: '4px'}}>NIT Rourkela</span></span>
        </Link>
        <div className="nav-menu">
          <Link to="/" className={loc.pathname === '/' ? 'active' : ''} style={{textDecoration: 'none'}}>Browse</Link>
          <Link to="/orders" className={loc.pathname === '/orders' ? 'active' : ''} style={{textDecoration: 'none'}}>My Orders</Link>
          <a href="#" style={{textDecoration: 'none'}}>Seller Dashboard</a>
          <a href="#" style={{textDecoration: 'none'}}>Admin</a>
          
          <div className="nav-icons">
            {/* Cart Icon First */}
            <Link to="/cart" className="icon-btn" style={{textDecoration: 'none'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span className="badge">1</span>
            </Link>
            {/* Bell Icon Second */}
            <Link to="/notifications" className="icon-btn" style={{textDecoration: 'none'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <span className="badge">12</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';
import './SearchHero.css';

export default function SearchHero() {
  return (
    <div className="container" style={{paddingTop: '32px'}}>
      <div className="search-bar-container">
        <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" placeholder="Search by title, author, or series..." className="search-input" />
        <button className="filters-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
          Filters
        </button>
      </div>
      
      <div className="hero-header">
        <h1>Discover Books on Campus</h1>
        <p>Buy, sell, and rent books from fellow students at NIT Rourkela</p>
      </div>
    </div>
  );
}

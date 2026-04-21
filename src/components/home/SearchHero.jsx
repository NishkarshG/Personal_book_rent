import React, { useState } from 'react';
import './SearchHero.css';

export default function SearchHero({ filters = {}, setFilters = () => {}, searchQuery = '', setSearchQuery = () => {} }) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const categories = ['All', 'Self-Help', 'Comic', 'Manga'];
  const genres = ['Productivity', 'Mindset', 'Finance', 'Shonen'];
  const conditions = ['All', 'Like New', 'Good', 'Acceptable', 'Worn'];
  const statuses = ['All', 'Available Now', 'Reserved'];

  const toggleFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      // In this UI, selecting "All" or re-selecting the active one might just set it to value
      // But typically, clicking a pill selects it. Since these are mutually exclusive groups,
      // it acts like radio buttons.
      [type]: value,
    }));
  };

  return (
    <div className="container" style={{paddingTop: '32px'}}>
      <div className="hero-header">
        <h1>Discover Books on Campus</h1>
        <p>Buy, sell, and rent books from fellow students at NIT Rourkela</p>
      </div>
      
      <div className="search-bar-container">
        <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input 
          type="text" 
          placeholder="Search for books" 
          className="search-input" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button 
          className={`filters-btn ${isFiltersOpen ? 'active' : ''}`} 
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
          Filters
        </button>
      </div>

      {isFiltersOpen && (
        <div className="filters-panel">
          <div className="filter-group">
            <span className="filter-label">CATEGORY</span>
            <div className="filter-options">
              {categories.map(c => (
                <button 
                  key={c} 
                  className={`filter-pill ${filters.category === c ? 'active' : ''}`}
                  onClick={() => toggleFilter('category', c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">GENRE</span>
            <div className="filter-options">
              {genres.map(g => (
                <button 
                  key={g} 
                  className={`filter-pill ${filters.genre === g ? 'active' : ''}`}
                  onClick={() => toggleFilter('genre', g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">CONDITION</span>
            <div className="filter-options">
              {conditions.map(c => (
                <button 
                  key={c} 
                  className={`filter-pill ${filters.condition === c ? 'active' : ''}`}
                  onClick={() => toggleFilter('condition', c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">STATUS</span>
            <div className="filter-options">
              {statuses.map(s => (
                <button 
                  key={s} 
                  className={`filter-pill ${filters.status === s ? 'active' : ''}`}
                  onClick={() => toggleFilter('status', s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookCard.css';

export default function BookCard({ book }) {
  const navigate = useNavigate();
  const savings = book.mrp - book.price;
  const pct = Math.round((savings / book.mrp) * 100);

  const handleCardClick = () => {
    navigate(`/book/${book.id}`);
  };

  const handleBtnClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="card" onClick={handleCardClick} style={{cursor: 'pointer'}}>
      <div className="card-img-container">
        <img src={book.image} alt={book.title} className="card-img" />
        <button className="heart-btn" onClick={handleBtnClick}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
        {book.trending && (
          <div className="trending-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg> Trending
          </div>
        )}
        {book.reserved && (
          <div className="reserved-badge">
            Reserved
            <br />COPIES SOLD
          </div>
        )}
        {book.rank && (
          <div className="rank-badge">{book.rank}</div>
        )}
      </div>
      
      <div className="card-body">
        <div className="tag-row">
          <span className="tag-cat">{book.category}</span>
          <span className="tag-cond">{book.condition}</span>
        </div>
        
        <h3 className="card-title">{book.title}</h3>
        <p className="card-author">{book.authorSubtitle || book.author}</p>
        
        <div className="price-row">
          <span className="price-bold">₹{book.price}</span>
          {book.mrp && <span className="price-mrp">₹{book.mrp}</span>}
        </div>
        
        {savings > 0 && (
          <div className="savings-text">
            You save ₹{savings} ({pct}% off)
          </div>
        )}
        
        <div className="rent-text">
          Rent: {book.rent}
        </div>
        
        <div className="wishlist-text">
          {book.wishlisted} students wishlisted
        </div>
        
        <button className="book-btn" onClick={handleBtnClick}>Book Now</button>
      </div>
    </div>
  );
}

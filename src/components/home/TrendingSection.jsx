import React from 'react';
import './TrendingSection.css';

const TRENDING = [
  { title: "Attack on Titan Vol. 34", author: "Hajime Isayama", price: "190", image: "https://placehold.co/80x120?text=AoT" },
  { title: "One Piece Vol. 104", author: "Eiichiro Oda", price: "180", image: "https://placehold.co/80x120?text=OP" },
  { title: "The Psychology of Money", author: "Morgan Housel", price: "180", image: "https://placehold.co/80x120?text=Psych" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", price: "180", image: "https://placehold.co/80x120?text=Think" },
];

export default function TrendingSection() {
  return (
    <div className="container" style={{marginBottom: '40px'}}>
      <div className="trending-box">
        <div className="trending-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
          <div>
            <h3>Trending This Week</h3>
            <p className="trending-sub">Most wishlisted books by students on campus</p>
          </div>
        </div>
        
        <div className="trending-list">
          {TRENDING.map((book, i) => (
            <div key={i} className="trend-card">
              <img src={book.image} alt={book.title} className="trend-img" />
              <div className="trend-info">
                <div className="trend-title">{book.title}</div>
                <div className="trend-author">{book.author}</div>
                <div className="trend-price">₹{book.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

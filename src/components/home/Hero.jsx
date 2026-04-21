import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Your Campus Library, <br />Reimagined.</h1>
          <p>
            Rent course materials for a fraction of the cost, or buy pre-loved books from your peers. 
            No more overpriced campus bookstores.
          </p>
          <div className="hero-actions">
            <button className="btn btn-secondary">Find a Book</button>
            <button className="btn btn-outline" style={{borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'transparent'}}>Sell Yours</button>
          </div>
          <div className="stats-row">
            <div className="stat"><strong>5,000+</strong> Students</div>
            <div className="stat"><strong>12,000+</strong> Books</div>
            <div className="stat"><strong>₹2M+</strong> Saved</div>
          </div>
        </div>
        <div className="hero-image">
           <img 
             src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop" 
             alt="Students studying with books"
             className="floating-books"
           />
        </div>
      </div>
    </section>
  );
}

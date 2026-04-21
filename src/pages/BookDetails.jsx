import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_BOOKS } from '../data/books';
import BookCard from '../components/ui/BookCard';
import './BookDetails.css';

export default function BookDetails() {
  const { id } = useParams();
  const book = ALL_BOOKS.find(b => b.id === parseInt(id)) || ALL_BOOKS[0];
  const [mode, setMode] = useState('buy');

  const savings = book.mrp - book.price;
  const pct = Math.round((savings / book.mrp) * 100);

  const moreBooks = ALL_BOOKS.filter(b => b.author.includes(book.author.split(' ')[0]) && b.id !== book.id);
  const displayMore = moreBooks.length > 0 ? moreBooks : ALL_BOOKS.slice(0, 2);

  return (
    <div className="book-details-page">
      <div className="container">
        
        <div className="breadcrumb">
          <Link to="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back
          </Link>
          <div className="browse-link">
             <Link to="/">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
               Back to Browse
             </Link>
          </div>
        </div>

        <div className="detail-hero">
          <div className="detail-image-box">
             <img src={book.image} alt={book.title} className="detail-img" />
          </div>
          
          <div className="detail-info-box">
             <div className="tag-row detail-tags">
               <span className="tag-cat">{book.category}</span>
               <span className="tag-cond">{book.condition}</span>
             </div>
             
             <h1 className="detail-title">{book.title}</h1>
             <p className="detail-author">by {book.author}</p>
             
             <div className="detail-stats">
                <span className="rating">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <strong>{book.rating}</strong> ({book.reviewsCount} reviews)
                </span>
                <span className="wishlist-stat">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  {book.wishlisted} wishlisted
                </span>
             </div>

             <div className="buy-rent-toggle">
                <button className={`toggle-btn ${mode === 'buy' ? 'active' : ''}`} onClick={() => setMode('buy')}>Buy</button>
                <button className={`toggle-btn ${mode === 'rent' ? 'active' : ''}`} onClick={() => setMode('rent')}>Rent</button>
             </div>

             <div className="detail-price-box">
                <div className="price-main-row">
                   <span className="huge-price">₹{book.price}</span>
                   <span className="huge-mrp">₹{book.mrp}</span>
                </div>
                
                <div className="savings-banner">
                   You save ₹{savings} ({pct}% off)
                </div>

                <div className="price-comparison">
                   <p className="compare-title">Price comparison:</p>
                   <div className="compare-row">
                      <span>Amazon India</span>
                      <span>₹{book.amazonPrice}</span>
                   </div>
                   <div className="compare-row">
                      <span>Flipkart</span>
                      <span>₹{book.flipkartPrice}</span>
                   </div>
                   <div className="compare-row highlight-row">
                      <span>BookSwap Price</span>
                      <span>₹{book.price}</span>
                   </div>
                </div>
             </div>

             <button className="book-btn huge-book-btn">Book Now</button>

             <div className="secondary-actions">
                <button className="sec-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> Add to Wishlist</button>
                <button className="sec-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg> Share</button>
             </div>

             <div className="seller-box section-box">
                <h3>Seller Information</h3>
                <div className="seller-profile">
                   <div className="seller-avatar">{book.seller.initial}</div>
                   <div className="seller-data">
                      <h4>{book.seller.name}</h4>
                      <div className="seller-rating">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> {book.seller.rating} seller rating
                      </div>
                      <div className="seller-location">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> {book.seller.location}
                      </div>
                   </div>
                </div>
              </div>
          </div>
        </div>

        <div className="detail-middle">
           <div className="detail-middle-left">
              <div className="about-box section-box">
                <h3>About This Book</h3>
                <p className="about-desc">{book.description}</p>
                <div className="about-grid">
                   <div className="about-item">
                      <span className="about-label">PUBLISHER</span>
                      <span className="about-value">{book.publisher}</span>
                   </div>
                   <div className="about-item">
                      <span className="about-label">VOLUME</span>
                      <span className="about-value">{book.volume}</span>
                   </div>
                   <div className="about-item">
                      <span className="about-label">CATEGORY</span>
                      <span className="about-value">{book.category}</span>
                   </div>
                   <div className="about-item">
                      <span className="about-label">CONDITION</span>
                      <span className="about-value">{book.condition}</span>
                   </div>
                </div>
              </div>
           </div>

           <div className="detail-middle-right">
              <div className="how-it-works-box section-box">
                <h3>How it works</h3>
                <div className="steps-list">
                  <div className="step-item">
                     <div className="step-num">1</div>
                     <div className="step-info">
                       <h5>Click "Book Now"</h5>
                       <p>Upload your NIT Rourkela ID card</p>
                     </div>
                  </div>
                  <div className="step-item">
                     <div className="step-num">2</div>
                     <div className="step-info">
                       <h5>Wait for Approval</h5>
                       <p>Seller reviews your ID (usually within 24 hours)</p>
                     </div>
                  </div>
                  <div className="step-item">
                     <div className="step-num">3</div>
                     <div className="step-info">
                       <h5>Get Pickup Details</h5>
                       <p>Receive seller's room number via WhatsApp</p>
                     </div>
                  </div>
                  <div className="step-item">
                     <div className="step-num">4</div>
                     <div className="step-info">
                       <h5>Pay & Collect</h5>
                       <p>Pay cash in person and get your book</p>
                     </div>
                  </div>
                </div>
              </div>
           </div>
        </div>

        <div className="detail-bottom">
           <h3>More by {book.author.split(' ')[0]}</h3>
           <div className="more-grid">
              {displayMore.map(b => (
                <BookCard key={b.id} book={b} />
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}

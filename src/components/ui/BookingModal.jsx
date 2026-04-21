import React, { useState } from 'react';
import './BookingModal.css';

export default function BookingModal({ book, price, onClose }) {
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{step === 1 ? 'Book This Item' : 'Booking Submitted'}</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="modal-body">
          {step === 1 ? (
            <form onSubmit={handleSubmit}>
              <div className="book-preview">
                <img src={book.image} alt={book.title} className="book-preview-img" />
                <div className="book-preview-info">
                  <div className="bp-title">{book.title}</div>
                  <div className="bp-author">{book.author}</div>
                  <div className="bp-price">₹{price}</div>
                </div>
              </div>

              <div className="form-group">
                <label>Full Name</label>
                <input required type="text" className="form-input" placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label>Email (NIT Rourkela)</label>
                <input required type="email" className="form-input" placeholder="yourname@nitrkl.ac.in" />
              </div>

              <div className="form-group">
                <label>WhatsApp Number</label>
                <input required type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" />
              </div>

              <div className="form-group">
                <label>NIT Rourkela ID Card</label>
                <div className="upload-zone">
                  <div className="upload-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                  </div>
                  <div className="upload-text">Click to upload or drag and drop</div>
                  <div className="upload-sub">PNG, JPG up to 10MB</div>
                </div>
                <div className="upload-note">Your ID will be verified by the seller. This helps ensure a safe transaction for both parties.</div>
              </div>

              <div className="warning-note">
                <strong>Note:</strong> The seller will review your ID card and approve your booking. You'll receive pickup details via WhatsApp within 24 hours. Payment happens in person when you collect the book.
              </div>

              <button type="submit" className="submit-btn">
                Submit Booking Request
              </button>
            </form>
          ) : (
            <div className="success-view">
              <div className="success-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 className="success-title">Booking Request Submitted!</h3>
              <p className="success-desc">
                Your ID is under review. You'll receive a notification via WhatsApp once the seller approves your booking.
              </p>

              <div className="next-steps-box">
                <h4>What's next?</h4>
                <ul className="next-steps-list">
                  <li>Seller reviews your NIT ID card</li>
                  <li>You'll get approval notification within 24 hours</li>
                  <li>Pickup details (room number, time) sent via WhatsApp</li>
                  <li>Meet seller, pay cash, and collect your book</li>
                </ul>
              </div>

              <button onClick={onClose} className="got-it-btn">Got it!</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

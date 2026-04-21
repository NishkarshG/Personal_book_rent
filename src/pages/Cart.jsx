import React from 'react';
import './Cart.css';

export default function Cart() {
  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-title">Shopping Cart</h1>

        <div className="cart-stepper">
           <div className="step active">
              <span className="step-circle">1</span>
              <span className="step-label">Cart Review</span>
           </div>
           <div className="step-line"></div>
           <div className="step">
              <span className="step-circle inactive">2</span>
              <span className="step-label inactive-label">Shipping</span>
           </div>
           <div className="step-line"></div>
           <div className="step">
              <span className="step-circle inactive">3</span>
              <span className="step-label inactive-label">Payment</span>
           </div>
        </div>

        <div className="cart-content">
           <div className="cart-list">
              <div className="cart-item">
                 <img src="/books/Thinking fast and slow.png" alt="Thinking, Fast and Slow" className="cart-item-img" />
                 <div className="cart-item-info">
                    <h3>Thinking, Fast and Slow</h3>
                    <p className="cart-item-author">Daniel Kahneman</p>
                    <div className="cart-item-meta">
                       <p>Condition: Good</p>
                       <p>Seller: Ishita M.</p>
                    </div>
                    <div className="cart-item-price">₹180</div>
                 </div>
                 <button className="cart-delete-btn">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                 </button>
              </div>
           </div>

           <div className="cart-summary-col">
              <div className="cart-summary-box">
                 <h3>Order Summary</h3>
                 <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹180</span>
                 </div>
                 <div className="summary-row">
                    <span>Shipping</span>
                    <span className="shipping-free">Free</span>
                 </div>
                 <div className="summary-total-row">
                    <span>Total</span>
                    <span>₹180</span>
                 </div>
                 <button className="checkout-btn">Proceed to Shipping <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}

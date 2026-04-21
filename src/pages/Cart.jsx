import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UpiModal from '../components/ui/UpiModal';
import './Cart.css';

export default function Cart() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [showUpi, setShowUpi] = useState(false);
  const navigate = useNavigate();

  const total = 180;

  const handlePlaceOrder = () => {
    if (paymentMethod === 'upi') {
      setShowUpi(true);
    } else {
      setStep(4);
    }
  };

  const handleUpiSuccess = () => {
    setShowUpi(false);
    setStep(4);
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-title">Shopping Cart</h1>

        {step < 4 && (
          <div className="cart-stepper">
             <div className={`step ${step >= 1 ? 'active' : ''}`}>
                <span className={`step-circle ${step < 1 ? 'inactive' : ''}`}>1</span>
                <span className={`step-label ${step < 1 ? 'inactive-label' : ''}`}>Cart Review</span>
             </div>
             <div className="step-line"></div>
             <div className={`step ${step >= 2 ? 'active' : ''}`}>
                <span className={`step-circle ${step < 2 ? 'inactive' : ''}`}>2</span>
                <span className={`step-label ${step < 2 ? 'inactive-label' : ''}`}>Shipping</span>
             </div>
             <div className="step-line"></div>
             <div className={`step ${step >= 3 ? 'active' : ''}`}>
                <span className={`step-circle ${step < 3 ? 'inactive' : ''}`}>3</span>
                <span className={`step-label ${step < 3 ? 'inactive-label' : ''}`}>Payment</span>
             </div>
          </div>
        )}

        {step < 4 && (
          <div className="cart-content">
           {step === 1 && (
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
                      <div className="cart-item-price">₹{total}</div>
                   </div>
                   <button className="cart-delete-btn">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                   </button>
                </div>
             </div>
           )}

           {step === 2 && (
             <div className="shipping-form-box">
                <h3>Shipping Information</h3>
                <div className="form-row">
                  <div className="form-group-cart">
                    <label>First Name</label>
                    <input type="text" defaultValue="" />
                  </div>
                  <div className="form-group-cart">
                    <label>Last Name</label>
                    <input type="text" defaultValue="" />
                  </div>
                </div>
                <div className="form-group-cart" style={{marginBottom: '16px'}}>
                  <label>Room Number</label>
                  <input type="text" placeholder="e.g., A-204" />
                </div>
                <div className="form-group-cart">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
             </div>
           )}

           {step === 3 && (
             <div className="payment-form-box">
                <h3>Payment Method</h3>
                <div 
                  className={`payment-method ${paymentMethod === 'cod' ? 'active' : ''}`} 
                  onClick={() => setPaymentMethod('cod')}
                >
                  <div className="payment-radio"></div>
                  <div className="payment-info">
                    <h4>Cash on Delivery</h4>
                    <p>Pay when you collect the book</p>
                  </div>
                </div>
                <div 
                  className={`payment-method ${paymentMethod === 'upi' ? 'active' : ''}`} 
                  onClick={() => setPaymentMethod('upi')}
                >
                  <div className="payment-radio"></div>
                  <div className="payment-info">
                    <h4>UPI / Online Payment</h4>
                    <p>Scan QR code and pay directly</p>
                  </div>
                </div>
             </div>
           )}

           <div className="cart-summary-col">
              <div className="cart-summary-box">
                 <h3>Order Summary</h3>
                 <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                 </div>
                 <div className="summary-row">
                    <span>Shipping</span>
                    <span className="shipping-free">Free</span>
                 </div>
                 <div className="summary-total-row">
                    <span>Total</span>
                    <span>₹{total}</span>
                 </div>
                 {step === 1 && (
                   <button className="checkout-btn" onClick={() => setStep(2)}>Proceed to Shipping <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                 )}
                 {step === 2 && (
                   <>
                     <button className="checkout-btn" onClick={() => setStep(3)}>Continue to Payment <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                     <button className="back-btn" onClick={() => setStep(1)}>Back to Cart</button>
                   </>
                 )}
                 {step === 3 && (
                   <>
                     <button className="checkout-btn" onClick={handlePlaceOrder}>Place Order <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg></button>
                     <button className="back-btn" onClick={() => setStep(2)}>Back to Shipping</button>
                   </>
                 )}
              </div>
            </div>
        </div>
        )}

        {step === 4 && (
          <div className="cart-success-view">
            <div className="success-icon-wrap" style={{background: 'var(--green-bg)', color: 'var(--green-text)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h2 className="success-title">Order Placed Successfully!</h2>
            <p className="success-desc">
              Your order has been confirmed. You'll receive pickup details via WhatsApp shortly.
            </p>
            <div className="cart-success-actions">
               <Link to="/orders" className="primary-btn">View My Orders</Link>
               <Link to="/" className="secondary-btn">Continue Shopping</Link>
            </div>
          </div>
        )}

        {showUpi && (
          <UpiModal 
            amount={total}
            onClose={() => setShowUpi(false)}
            onSuccess={handleUpiSuccess}
          />
        )}

      </div>
    </div>
  );
}

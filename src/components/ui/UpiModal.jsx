import React, { useState } from 'react';
import './UpiModal.css';

export default function UpiModal({ amount, onClose, onSuccess }) {
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="upi-modal-overlay" onClick={onClose}>
      <div className="upi-modal-content" onClick={e => e.stopPropagation()}>
        <div className="upi-modal-header">
          <h2>{step === 1 ? 'Scan & Pay' : 'Payment Submitted'}</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="upi-modal-body">
          {step === 1 ? (
            <form onSubmit={handleSubmit}>
              <div className="pay-amount">₹{amount}</div>
              <p className="pay-meta">Scan QR Code using any UPI app</p>
              
              <div className="qr-code-box">
                <img src="/QR.jpeg" alt="UPI QR Code" className="qr-code-img" />
              </div>

              <div className="ss-upload-zone">
                <div className="ss-upload-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <div style={{fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px'}}>Attach Payment Screenshot</div>
                <div style={{fontSize: '0.75rem', color: 'var(--text-light)'}}>Required for verification</div>
              </div>

              <button type="submit" style={{width: '100%', padding: '14px', background: 'var(--text-main)', color: 'white', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: '1rem', cursor: 'pointer'}}>
                Submit Payment
              </button>
            </form>
          ) : (
            <div style={{textAlign: 'center', paddingBottom: '12px'}}>
              <div style={{width: '64px', height: '64px', background: 'var(--green-bg)', color: 'var(--green-text)', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px'}}>Payment Verification Pending</h3>
              <p style={{fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.5}}>
                Your screenshot has been uploaded. We will verify the payment and confirm your order shortly.
              </p>

              <button onClick={onSuccess} style={{background: '#111', color: 'white', width: '100%', padding: '14px', borderRadius: 'var(--radius-sm)', border: 'none', fontWeight: 600, fontSize: '1rem', cursor: 'pointer'}}>
                Go to My Orders
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

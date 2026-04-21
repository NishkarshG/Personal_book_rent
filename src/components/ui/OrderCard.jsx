import React from 'react';
import './OrderCard.css';

export default function OrderCard({ order }) {
  const getStatusBadge = (status) => {
    switch(status) {
      case 'Shipped':
        return <span className="status-badge blue-badge">{status}</span>;
      case 'Delivered':
        return <span className="status-badge green-badge">{status}</span>;
      case 'Confirmed':
        return <span className="status-badge yellow-badge">{status}</span>;
      case 'Cancelled':
        return <span className="status-badge red-badge">{status}</span>;
      default:
        return null;
    }
  };

  return (
    <div className="order-card">
       <div className="order-cover-box">
          <img src={order.book.image} alt={order.book.title} className="order-cover" />
       </div>
       <div className="order-content">
          <div className="order-top-row">
            <div className="order-title-group">
               <h3 className="order-title">{order.book.title}</h3>
               {getStatusBadge(order.status)}
            </div>
            <div className="order-price-group">
               <div className="order-amount">₹{order.amount}</div>
               <div className="order-type">{order.type}</div>
            </div>
          </div>

          <div className="order-meta">
             <p className="order-author">{order.book.author}</p>
             <p className="order-id">Order ID: {order.id}</p>
          </div>

          <div className="order-columns">
             <div className="order-col">
                <span className="col-label">Order Date</span>
                <span className="col-value">{order.orderDate}</span>
             </div>
             <div className="order-col">
                <span className="col-label">Seller</span>
                <span className="col-value">{order.seller}</span>
             </div>
             <div className="order-col">
                <span className="col-label">{order.deliveredOn ? 'Delivered On' : 'Expected Delivery'}</span>
                <span className="col-value">{order.deliveredOn || order.expectedDelivery}</span>
             </div>
          </div>

          <div className="order-actions">
             <button className="primary-action-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                Track Order
             </button>
             {order.status === 'Delivered' && (
               <button className="secondary-action-btn">Rate Seller</button>
             )}
             <button className="secondary-action-btn">Contact Seller</button>
          </div>
       </div>
    </div>
  );
}

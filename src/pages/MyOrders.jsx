import React, { useState } from 'react';
import { ALL_ORDERS } from '../data/orders';
import OrderCard from '../components/ui/OrderCard';
import './MyOrders.css';

export default function MyOrders() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'];

  const displayedOrders = activeTab === 'All' 
    ? ALL_ORDERS 
    : ALL_ORDERS.filter(o => o.status === activeTab);

  return (
    <div className="orders-page">
      <div className="container">
        
        <div className="orders-header">
          <h1>My Orders</h1>
          <p>Track and manage your book orders</p>
        </div>

        <div className="orders-tabs">
          {tabs.map(tab => (
            <button 
              key={tab}
              className={`pill-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="orders-list">
          {displayedOrders.length > 0 ? (
            displayedOrders.map(order => (
              <OrderCard key={order.id} order={order} />
            ))
          ) : (
            <div className="empty-state">No {activeTab.toLowerCase()} orders found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

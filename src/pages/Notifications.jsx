import React, { useState } from 'react';
import { ALL_NOTIFICATIONS } from '../data/notifications';
import './Notifications.css';

export default function Notifications() {
  const [filter, setFilter] = useState('All');
  const [notifs, setNotifs] = useState(ALL_NOTIFICATIONS);
  const tabs = ['All', 'Orders', 'Messages', 'Wishlist', 'System'];

  const unreadCount = notifs.filter(n => n.unread).length;

  const markAllRead = () => {
    setNotifs(notifs.map(n => ({...n, unread: false})));
  };

  const markRead = (id) => {
    setNotifs(notifs.map(n => n.id === id ? {...n, unread: false} : n));
  };

  const displayed = filter === 'All' ? notifs : notifs.filter(n => n.type === filter);

  // Group by DATE (TODAY vs YESTERDAY)
  const grouped = displayed.reduce((acc, curr) => {
    if (!acc[curr.group]) acc[curr.group] = [];
    acc[curr.group].push(curr);
    return acc;
  }, {});

  const getStatusIcon = (status) => {
    switch(status) {
      case 'success':
        return (
           <div className="notif-icon-circle bg-green">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
           </div>
        );
      case 'message':
        return (
           <div className="notif-icon-circle bg-blue">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
           </div>
        );
      case 'warning':
        return (
           <div className="notif-icon-circle bg-orange">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
           </div>
        );
      case 'wishlist':
        return (
           <div className="notif-icon-circle bg-red">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
           </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="notifications-page">
       <div className="container" style={{maxWidth: "900px"}}>
          
          <div className="notif-header">
             <div className="notif-title-row">
               <h1>Notifications</h1>
               {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
             </div>
             <button className="mark-read-text" onClick={markAllRead}>Mark all as read</button>
          </div>

          <div className="notif-tabs">
            {tabs.map(tab => (
              <button 
                key={tab}
                className={`notif-pill ${filter === tab ? 'active' : ''}`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="notif-feed">
             {Object.keys(grouped).length > 0 ? Object.keys(grouped).map(groupName => (
               <div key={groupName} className="notif-group">
                 <h4 className="group-title">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                   {groupName}
                 </h4>
                 
                 <div className="group-list">
                    {grouped[groupName].map(notif => (
                       <div key={notif.id} className="notif-card" onClick={() => markRead(notif.id)}>
                          {getStatusIcon(notif.status)}
                          
                          <div className="notif-body">
                             <div className="notif-title-wrap">
                               <h5>{notif.title}</h5>
                               {notif.unread && <span className="unread-dot"></span>}
                             </div>
                             <p className="notif-desc">{notif.desc}</p>
                             <span className="notif-time">{notif.time}</span>
                          </div>
                          
                          <button className="notif-action-btn" onClick={(e) => { e.stopPropagation(); markRead(notif.id); }}>
                             {notif.actionText}
                          </button>
                       </div>
                    ))}
                 </div>
               </div>
             )) : (
                <div className="empty-state">No notifications to display.</div>
             )}
          </div>
       </div>
    </div>
  );
}

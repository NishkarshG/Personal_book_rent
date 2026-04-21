export const ALL_NOTIFICATIONS = [
  {
    id: 1,
    type: 'Orders',
    status: 'success',
    title: 'Order Approved',
    desc: 'Your order #BK-284/ for "Atomic Habits" has been approved by the seller. Pickup is scheduled for tomorrow.',
    time: '2 hours ago',
    group: 'TODAY',
    unread: true,
    actionText: 'View Order'
  },
  {
    id: 2,
    type: 'Messages',
    status: 'message',
    title: 'New Message from Priya S.',
    desc: '"Hi! The book is in great condition. I can meet at the campus library tomorrow at 3 PM. Does that work?"',
    time: '4 hours ago',
    group: 'TODAY',
    unread: true,
    actionText: 'Message Seller'
  },
  {
    id: 3,
    type: 'System',
    status: 'warning',
    title: 'Rental Reminder',
    desc: 'Your rental for "Design Patterns" expires in 3 days. Return or extend your rental to avoid late fees.',
    time: '5 hours ago',
    group: 'TODAY',
    unread: false,
    actionText: 'View Details'
  },
  {
    id: 4,
    type: 'Wishlist',
    status: 'wishlist',
    title: 'New Volume Available',
    desc: '"One Piece Vol. 104" is now available from a seller near your campus. Grab it before it\'s gone!',
    time: 'Yesterday at 6:30 PM',
    group: 'YESTERDAY',
    unread: false,
    actionText: 'View Book'
  }
];

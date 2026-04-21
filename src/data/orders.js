export const ALL_ORDERS = [
  {
    id: 'BSW-20250120-4829',
    book: {
      title: 'Atomic Habits',
      author: 'James Clear',
      image: '/books/Atomic habit.png'
    },
    status: 'Shipped', // Options: Confirmed, Shipped, Delivered, Cancelled
    orderDate: '4/18/2026',
    expectedDelivery: '4/21/2026',
    deliveredOn: null,
    seller: 'Rahul M. (A-204)',
    amount: 250,
    type: 'Purchase' // Purchase or Rental
  },
  {
    id: 'BSW-20250118-3721',
    book: {
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      image: '/books/Psycology of money.png'
    },
    status: 'Delivered',
    orderDate: '4/15/2026',
    expectedDelivery: '4/17/2026',
    deliveredOn: '4/17/2026',
    seller: 'Amit K. (C-305)',
    amount: 45,
    type: 'Rental'
  },
  {
    id: 'BSW-20250115-2845',
    book: {
      title: 'Attack on Titan Vol. 34',
      author: 'Hajime Isayama',
      image: '/books/Attack on titan.png'
    },
    status: 'Delivered',
    orderDate: '4/12/2026',
    expectedDelivery: '4/14/2026',
    deliveredOn: '4/14/2026',
    seller: 'Rohan K. (C-115)',
    amount: 190,
    type: 'Purchase'
  }
];

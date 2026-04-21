import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import MyOrders from './pages/MyOrders';
import Cart from './pages/Cart';
import Notifications from './pages/Notifications';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import MyOrders from './pages/MyOrders';
import Cart from './pages/Cart';
import Notifications from './pages/Notifications';
import Login from './pages/Login';

function App() {
  const [role, setRole] = useState(localStorage.getItem('user_role'));
  
  if (!role) {
    return <Login onLogin={(r) => { 
      localStorage.setItem('user_role', r);
      setRole(r);
    }} />;
  }

  return (
    <div className="app-wrapper">
      <Navbar role={role} setRole={setRole} />
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

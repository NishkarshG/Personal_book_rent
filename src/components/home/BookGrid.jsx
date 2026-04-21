import React from 'react';
import BookCard from '../ui/BookCard';
import './BookGrid.css';
import { ALL_BOOKS } from '../../data/books';

export default function BookGrid() {
  return (
    <div className="container" style={{marginBottom: "60px"}}>
      <div className="grid-header">
        <h2>All Books ({ALL_BOOKS.length})</h2>
        <div className="sort-dropdown">
           <span className="sort-label">Sort by:</span>
           <select className="sort-select">
             <option>Recently Added</option>
           </select>
        </div>
      </div>
      <div className="books-grid">
        {ALL_BOOKS.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

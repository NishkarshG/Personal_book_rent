import React from 'react';
import BookCard from '../ui/BookCard';
import './BookGrid.css';
import { ALL_BOOKS } from '../../data/books';

export default function BookGrid({ filters = {}, searchQuery = '' }) {
  const filteredBooks = ALL_BOOKS.filter(book => {
    // Search query match
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = book.title.toLowerCase().includes(query) || 
                            book.author.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Category match
    if (filters.category && filters.category !== 'All') {
      const bookCategory = book.category ? book.category.replace('-', '') : '';
      const filterCategory = filters.category.toUpperCase().replace('-', '');
      if (bookCategory !== filterCategory) return false;
    }

    // Genre match
    // Simple heuristic: check if word is in description, or map explicitly later
    if (filters.genre && filters.genre !== 'All') {
      const genre = filters.genre.toLowerCase();
      const desc = book.description ? book.description.toLowerCase() : '';
      // 'Productivity' is in 'Atomic Habits', 'Deep Work'
      // 'Mindset' -> maybe 'Psychology of Money', 'Thinking, Fast and Slow'
      // fallback to category MANGA for Shonen
      if (genre === 'shonen' && book.category !== 'MANGA') return false;
      if (genre === 'productivity' && !['deep work', 'atomic habits'].includes(book.title.toLowerCase())) return false;
      if (genre === 'mindset' && !['the psychology of money', 'thinking, fast and slow'].includes(book.title.toLowerCase())) return false;
      if (genre === 'finance' && !['the psychology of money'].includes(book.title.toLowerCase())) return false;
    }

    // Condition match
    if (filters.condition && filters.condition !== 'All') {
      if (book.condition !== filters.condition.toUpperCase()) return false;
    }

    // Status match
    if (filters.status && filters.status !== 'All') {
      if (filters.status === 'Available Now' && book.reserved) return false;
      if (filters.status === 'Reserved' && !book.reserved) return false;
    }

    return true;
  });

  return (
    <div className="container" style={{marginBottom: "60px"}}>
      <div className="grid-header">
        <h2>All Books ({filteredBooks.length})</h2>
        <div className="sort-dropdown">
           <span className="sort-label">Sort by:</span>
           <select className="sort-select">
             <option>Recently Added</option>
           </select>
        </div>
      </div>
      <div className="books-grid">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
        {filteredBooks.length === 0 && (
          <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--text-muted)'}}>
            No books match the selected filters.
          </div>
        )}
      </div>
    </div>
  );
}

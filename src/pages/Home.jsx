import React, { useState } from 'react';
import SearchHero from '../components/home/SearchHero';
import TrendingSection from '../components/home/TrendingSection';
import BookGrid from '../components/home/BookGrid';

export default function Home() {
  const [filters, setFilters] = useState({
    category: 'All',
    genre: 'All',
    condition: 'All',
    status: 'All'
  });
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <SearchHero 
        filters={filters} 
        setFilters={setFilters} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      <TrendingSection />
      <BookGrid filters={filters} searchQuery={searchQuery} />
    </>
  );
}

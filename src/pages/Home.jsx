import React from 'react';
import SearchHero from '../components/home/SearchHero';
import TrendingSection from '../components/home/TrendingSection';
import BookGrid from '../components/home/BookGrid';

export default function Home() {
  return (
    <>
      <SearchHero />
      <TrendingSection />
      <BookGrid />
    </>
  );
}

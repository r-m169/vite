import React, { useEffect } from 'react';
import { useState } from 'react';
import SearchQuery from './components/searchQuery'; // Adjust the import path and case if needed
import SearchResults from './components/searchResults';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const getData = async () => {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`)
    const finalResults = await res.json();
    setResults(finalResults?.query?.search || [])
  }

  useEffect(() => {
    getData()
  }, [searchQuery])

  return (
    <div className='container'>
      <h1>Home Page</h1>
      <SearchQuery searchInput={searchQuery} setSearchInput={setSearchQuery} />
      <SearchResults results={results} />
    </div>
  );
};

export default Home;

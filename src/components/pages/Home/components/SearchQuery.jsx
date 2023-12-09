import React from 'react';
import  './styles.css'
export default function SearchQuery({ searchInput, setSearchInput }) {
  return (
    <input  
      type="text"
      placeholder='Enter anything to search'
      value={searchInput}
      onChange={(e) => { setSearchInput(e.target.value) }}
    />
  )
}

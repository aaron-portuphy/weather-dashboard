import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col sm:flex-row gap-4 w-full max-w-md">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        className="p-2 border rounded w-full sm:w-3/4"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full sm:w-1/4">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

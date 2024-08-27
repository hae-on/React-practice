import { useState } from 'react';

interface SearchBarProps {
  items: string[];
}

const SearchBar = ({ items }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h1>검색</h1>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search...'
      />

      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default SearchBar;

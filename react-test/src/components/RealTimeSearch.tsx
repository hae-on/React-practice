import { useState } from 'react';

interface RealTimeSearchProps {
  items: string[];
}

const RealTimeSearch = ({ items }: RealTimeSearchProps) => {
  const [query, setQuery] = useState('');

  const filteredItem = items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search...'
      />

      <ul>
        {filteredItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeSearch;

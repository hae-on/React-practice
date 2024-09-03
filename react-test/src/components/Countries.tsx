import { useState } from 'react';

const countriesArr = [
  { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
  { name: 'Pak', value: 'PK', cities: ['Lahore', 'Karachi'] },
  { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] },
];

const Countries = () => {
  const [country, setCountry] = useState(0);

  return (
    <>
      <select
        value={country}
        onChange={(e) => {
          setCountry(Number(e.target.value));
        }}
      >
        {countriesArr.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>
      <select>
        {countriesArr[country].cities.map((city, index) => (
          <option key={index} value={index}>
            {city}
          </option>
        ))}
      </select>
    </>
  );
};

export default Countries;

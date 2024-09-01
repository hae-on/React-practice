import { useState } from 'react';

const StarRating = () => {
  const totalStars = 5;

  const [rating, setRating] = useState(0);

  return (
    <div>
      {[
        ...Array.from({ length: totalStars }).map((_, index) => {
          const starValue = index + 1;

          return (
            <span
              key={index}
              onClick={() => setRating(starValue)}
              style={{
                cursor: 'pointer',
                color: rating >= starValue ? 'gold' : 'gray',
              }}
            >
              ★
            </span>
          );
        }),
      ]}
    </div>
  );
};

export default StarRating;

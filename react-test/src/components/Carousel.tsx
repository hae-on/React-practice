import { useState } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div>
      <button onClick={handlePrev}>이전</button>
      <img width={500} height={500} src={images[currentIndex]} alt='carousel' />
      <button onClick={handleNext}>이후</button>
    </div>
  );
};

export default Carousel;

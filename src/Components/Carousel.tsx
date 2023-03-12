import React, { useState, useRef, useEffect } from 'react';

import styles from "../Styles/Carousel.module.css"
type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className={styles.carousel} ref={slideRef}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.carouselslide} ${index === currentSlide ? `${styles.carouselslideactive}` : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Carousel;

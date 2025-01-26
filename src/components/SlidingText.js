import { useState, useEffect, useRef } from 'react';
import styles from './SlidingText.module.css'; // Create a new CSS Module for this component

const SlidingText = ({ direction = 'left', text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Lower threshold for better detection
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={`${styles['sliding-text']} ${isVisible ? styles[`animate-slide-${direction}`] : ''}`}
    >
      {text}
    </div>
  );
};

export default SlidingText;

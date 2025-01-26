import { useState, useEffect, useRef } from 'react';
import styles from './SlidingText.module.css'; // Create a new CSS Module for this component

const SlidingText = ({ direction = 'left', text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has occurred
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Set animation flag when element is visible
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
  }, [hasAnimated]); // Run when `hasAnimated` changes

  return (
    <div
      ref={textRef}
      className={`${styles['sliding-text']} ${isVisible ? styles[`animate-slide-${direction}`] : ''} ${hasAnimated ? 'animation-fill-forwards' : ''}`}
    >
      {text}
    </div>
  );
};

export default SlidingText;

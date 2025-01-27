import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const words = ['Bacco', "Sensation", "Your Destination", "Your Imagination", "Your Inspiration", "Your Adventure", "Your Creation", "Your Vision", "Your Dream", "Your Reality"]; // Words to type
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // Typing speed

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      // Erase letter by letter
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, speed);
    } else {
      // Type letter by letter
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, speed);
    }

    // Pause logic
    if (!isDeleting && text === currentWord) {
      // For the first word, pause longer
      if (wordIndex === 0) {
        timeout = setTimeout(() => setIsDeleting(true), 3000); // 3-second delay for the first word
      } else {
        // Normal pause for other words
        timeout = setTimeout(() => setIsDeleting(true), 1000); // 1-second delay
      }
    } else if (isDeleting && text === '') {
      // Move to the next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length); // Loop back to the first word
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed]);

  return (
    <span className="inline-block">
      {text}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default TypingEffect;

const words = ["Bacco", "Sensation", "Your Destination", "Your Imagination", "Your Inspiration", "Your Adventure", "Your Creation", "Your Vision", "Your Dream", "Your Reality"]; // Words to type
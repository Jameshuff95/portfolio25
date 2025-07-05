import { useState, useEffect } from 'react';
import { introWords } from '../_lists/lists';

export const TypeIntro = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentTitle = introWords[currentWordIndex].title;

  // typing animation
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting && displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % introWords.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, currentTitle]);

  return (
    <div className="flex flex-col justify-center gap-2 items-center h-1/6 text-3xl">
      <h2>Hi! My name is James.</h2>
      <div className="flex gap-1">
        <p>I am a</p>
        <p className="font-mono">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </div>
  );
};

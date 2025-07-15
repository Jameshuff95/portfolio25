import { useState, useEffect } from 'react';
import { introWords } from '../_lists/lists';
import { TypeIntroProps } from '../_types/types';

export const TypeIntro = ({ className }: TypeIntroProps) => {
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
    <section className={`${className}`}>
      <header className="md:w-[40%]">
        <h2 className="text-6xl min-w-full h-full flex flex-col items-center justify-center">
          My name is <span className="font-bold">James.</span>
        </h2>
      </header>

      <article className="md:w-[60%]">
        <div className="flex flex-col justify-center gap-1 w-full h-full min-h-[150]">
          <p className="text-3xl">I am a</p>
          <p className="font-mono font-bold text-5xl">
            <span aria-label="animated-typing">{displayText}</span>
            <span className="animate-pulse relative z-[1]">|</span>
          </p>
        </div>
      </article>
    </section>
  );
};

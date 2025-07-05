'use client';

import { useState, useEffect } from 'react';
import { introWords, introDropdowns } from './_lists/lists';

export const TypeIntro = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentTitle = introWords[currentWordIndex].title;

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
    <div className="flex flex-col items-center">
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

export default function Home() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const Dropdowns = () => {
    return (
      <ul className="flex flex-col gap-2">
        {introDropdowns.map((dropdown) => (
          <li key={dropdown.id} className="border p-2">
            <div className="flex justify-between items-center">
              {dropdown.title}
              <i
                className="bi bi-plus cursor-pointer"
                onClick={() => toggleDropdown(dropdown.id)}
              />
            </div>

            {expandedId === dropdown.id && (
              <div className="border mt-2 p-2 flex flex-col gap-1">
                <p className="font-semibold">{dropdown.info?.title}</p>
                <p>{dropdown.info?.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <main className="p-2 flex flex-col flex-grow min-h-full overflow-hidden">
      <TypeIntro />
      <Dropdowns />
    </main>
  );
}

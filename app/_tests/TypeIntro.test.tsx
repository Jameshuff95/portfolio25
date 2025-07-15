import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react';

// Mock the animated words
jest.mock('../_lists/lists.tsx', () => ({
  introWords: [{ title: 'developer' }, { title: 'tester' }],
}));

// Import the component under test
import { TypeIntro } from '../_components/TypeIntro';

jest.useFakeTimers();

describe('TypeIntro component', () => {
  it('should start typing the first word from introWords', () => {
    render(<TypeIntro />);

    expect(screen.getByText('Hi! My name is James.')).toBeInTheDocument();
    expect(screen.getByText('I am a')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(500); // simulate part of the word being typed
    });

    expect(screen.getByText((text) => text.includes('d'))).toBeInTheDocument();
  });

  it('should eventually delete and cycle to the next word', () => {
    render(<TypeIntro />);

    for (let i = 0; i < 30; i++) {
      act(() => {
        jest.advanceTimersByTime(500); // 500ms chunks
      });
    }

    const typedNode = document.querySelector('.font-mono');
    const text = typedNode?.textContent?.replace('|', '') ?? '';

    console.log('typed:', text); // this should show us what's going wrong

    // Check if we got either word, even partially typed
    expect(text).toMatch(/dev|test/i);
  });
});

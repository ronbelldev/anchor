
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from './page';
import '@testing-library/jest-dom'

jest.mock('./utils/quizData', () => ({
  quizData: {
    questions: [
      {
        text: "Explain the purpose and use cases of React Portals",
        answers: [
          { text: "Managing global state", isCorrect: false },
          { text: "Rendering children outside the DOM hierarchy", isCorrect: true },
          { text: "Implementing server-side rendering", isCorrect: false },
          { text: "Optimizing component re-rendering", isCorrect: false },
        ],
      },
      {
        text: "What are React Hooks, and how do they differ from class component lifecycle methods?",
        answers: [
          { text: "Hooks are used for styling components, while lifecycle methods handle state.", isCorrect: false },
          { text: "Hooks are functions that enable the use of state and lifecycle features in functional components.", isCorrect: true },
          { text: "Hooks are only applicable to class components.", isCorrect: false },
          { text: "Hooks are used for routing in React applications.", isCorrect: false },
        ],
      },
      {
        text: "Examine the differences between controlled and uncontrolled components in React forms",
        answers: [
          { text: "Controlled components are stateless, while uncontrolled components use local component state.", isCorrect: false },
          { text: "Controlled components rely on React state to manage form data, while uncontrolled components do not.", isCorrect: true },
          { text: "Controlled components are faster in rendering, while uncontrolled components provide better performance.", isCorrect: false },
          { text: "Controlled components are only used for functional components.", isCorrect: false },
        ],
      },
      {
        text: "What is the significance of the Virtual DOM in React, and how does it contribute to performance optimization?",
        answers: [
          { text: "Virtual DOM is used for server-side rendering and does not impact performance.", isCorrect: false },
          { text: "Virtual DOM ensures faster rendering by updating only the changed parts of the actual DOM.", isCorrect: true },
          { text: "Virtual DOM is an outdated concept in modern React applications.", isCorrect: false },
          { text: "Virtual DOM is used exclusively in class components.", isCorrect: false },
        ],
      },
      {
        text: "Explain the concept of React Fiber and its role in improving the performance of React applications",
        answers: [
          { text: "React Fiber is a styling library for React components.", isCorrect: false },
          { text: "React Fiber is an outdated feature replaced by React Hooks.", isCorrect: false },
          { text: "React Fiber is a complete rewrite of React's core algorithm, improving the ability to handle concurrent operations and rendering.", isCorrect: true },
          { text: "React Fiber is a state management solution in React applications.", isCorrect: false },
        ],
      }
    ],
}
}));

describe('Home component', () => {
  it('renders the Home component', () => {
    const { getByText } = render(<Home />);
    // @ts-ignore
    expect(getByText('Next >')).toBeInTheDocument();
  });

  it('handles the Next button click', () => {
    const { getByText } = render(<Home />);
    fireEvent.click(getByText('Rendering children outside the DOM hierarchy'));
    fireEvent.click(getByText('Next >'));
  });


  it('Check full flow of the quiz with valid score', () => {
    const { getByText } = render(<Home />);
    fireEvent.click(getByText('Rendering children outside the DOM hierarchy'));
    fireEvent.click(getByText('Next >'));
    fireEvent.click(getByText('Hooks are functions that enable the use of state and lifecycle features in functional components.'));
    fireEvent.click(getByText('Next >'));
    fireEvent.click(getByText('Controlled components are stateless, while uncontrolled components use local component state.'));
    fireEvent.click(getByText('Next >'));
    fireEvent.click(getByText('Virtual DOM is used for server-side rendering and does not impact performance.'));
    fireEvent.click(getByText('Next >'));
    fireEvent.click(getByText('< Previous'));
    fireEvent.click(getByText('Virtual DOM ensures faster rendering by updating only the changed parts of the actual DOM.'));
    fireEvent.click(getByText('Next >'));
    fireEvent.click(getByText('React Fiber is a complete rewrite of React\'s core algorithm, improving the ability to handle concurrent operations and rendering.'));
    fireEvent.click(getByText('Submit'));
    expect(getByText('Your score is: 80!')).toBeInTheDocument();
  });

});

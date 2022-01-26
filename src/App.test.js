import { render, screen } from '@testing-library/react';
import App from './App';
import Button from './components/Button';

test('contains app js text', () => {
  render(<App />);
  const linkElement = screen.getByText(/App.js/i);
  expect(linkElement).toBeInTheDocument();
});

// test('button contains text button', () => {
//   render(<Button />);
//   const linkElement = screen.getByText(/Button/i);
//   expect(linkElement).toBeInTheDocument();
// });

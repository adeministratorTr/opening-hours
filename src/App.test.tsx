import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders default', () => {
  render(<App />);
  const linkElement = screen.getByText(/Opening Hour Project/i);
  expect(linkElement).toBeInTheDocument();
});

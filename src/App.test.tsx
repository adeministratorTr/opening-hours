import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render default', () => {
    render(<App />);
    const linkElement = screen.getByText(/Opening Hour Project/i);
    expect(linkElement).toBeVisible();
  });
});

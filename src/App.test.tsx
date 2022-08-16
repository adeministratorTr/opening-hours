import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render default', () => {
    render(<App />);
    expect(screen.getByTestId('Header')).toBeVisible();
    expect(screen.getByTestId('HomePage')).toBeVisible();
  });
});

import { render, screen } from '@testing-library/react';

import Divider from './index';

describe('Divider', () => {
  it('should render default', () => {
    render(<Divider />);

    expect(screen.getByTestId('Divider')).toBeVisible();
  });

  it('should render with light variant', () => {
    render(<Divider variant="light" />);

    expect(screen.getByTestId('Divider')).toBeVisible();
    expect(screen.getByTestId('Divider')).toHaveClass('light');
  });
});

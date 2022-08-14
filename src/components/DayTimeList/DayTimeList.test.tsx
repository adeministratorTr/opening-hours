import { render, screen } from '@testing-library/react';

import DayTimeList from './index';

describe('DayTimeList', () => {
  const mockChildren = 'Monday';
  const defaultTitle = 'Opening hours';

  it('should render default', () => {
    render(<DayTimeList>{mockChildren}</DayTimeList>);

    expect(screen.getByTestId('DayTimeList')).toBeVisible();
    expect(screen.getByText(defaultTitle)).toBeVisible();
    expect(screen.getByTestId('DayTimeListChildren')).toBeVisible();
  });

  it('should render with title', () => {
    const mockTitleProp = 'Different Title';
    const { rerender } = render(<DayTimeList>{mockChildren}</DayTimeList>);
    rerender(<DayTimeList title={mockTitleProp}>{mockChildren}</DayTimeList>);

    expect(screen.getByTestId('DayTimeList')).toBeVisible();

    // Added by purpose. We expect to component has divider under title.
    // If somebody removes it, it should break DayTimeList test
    expect(screen.getByTestId('Divider')).toBeVisible();

    expect(screen.getByText(mockTitleProp)).toBeVisible();
    expect(screen.queryByText(defaultTitle)).toBeNull();
    expect(screen.getByTestId('DayTimeListChildren')).toBeVisible();
  });
});

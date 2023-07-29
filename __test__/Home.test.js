import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  test('renders deploy link', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Get the Weather for Your City Now!/i);
    expect(linkElement).toBeInTheDocument();
  });
});

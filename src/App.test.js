import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Search pokemon', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search pokemon/i);
  expect(linkElement).toBeInTheDocument();
});

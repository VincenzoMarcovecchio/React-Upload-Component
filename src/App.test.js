import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Seleziona File button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Seleziona File/i);
  expect(linkElement).toBeInTheDocument();
});

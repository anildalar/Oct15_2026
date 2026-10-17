import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders Hello World', () => {
  render(<App />);

  expect(screen.getByText('Hello World')).toBeInTheDocument();
});

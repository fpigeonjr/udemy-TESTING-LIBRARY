import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('button starts with the correct color and label', () => {
    render(<App />);

    const btn = screen.getByRole('button', { name: /blue/i });

    expect(btn).toHaveClass('red');
  });

  test('button has the correct color and after click', async () => {
    render(<App />);

    const user = userEvent.setup();
    const btn = screen.getByRole('button', { name: /blue/i });
    await user.click(btn);

    expect(btn).toHaveClass('blue');
    expect(btn).toHaveTextContent(/red/i);
  });

  test('checkbox flow', () => {
    render(<App />);

    const btn = screen.getByRole('button', { name: /blue/i });
    const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

    expect(btn).toBeEnabled();
    expect(checkbox).not.toBeChecked();
  });
});

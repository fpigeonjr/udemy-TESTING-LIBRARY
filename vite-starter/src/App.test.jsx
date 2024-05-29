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

  test('checkbox flow', async () => {
    render(<App />);
    const user = userEvent.setup();
    const btn = screen.getByRole('button', { name: /blue/i });
    const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

    expect(btn).toBeEnabled();
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    screen.debug();
    // check to see if btn is disabled and class gray
    expect(btn).not.toBeEnabled();
    expect(checkbox).toBeChecked();
    expect(btn).toHaveClass('gray');

    await user.click(checkbox);
    expect(btn).toBeEnabled();
    expect(btn).toHaveClass('red');
    expect(checkbox).not.toBeChecked();
    // click btn to check class blue
    await user.click(btn);
    expect(btn).toHaveClass('blue');
  });
});

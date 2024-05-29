import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { kebabCaseToTitleCase } from './helpers';

describe('App', () => {
  test('button starts with the correct color and label', () => {
    render(<App />);

    const btn = screen.getByRole('button', { name: /blue/i });

    expect(btn).toHaveClass('medium-violet-red');
  });

  test('button has the correct color and after click', async () => {
    render(<App />);

    const user = userEvent.setup();
    const btn = screen.getByRole('button', { name: /blue/i });
    await user.click(btn);

    expect(btn).toHaveClass(/blue/i);
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
    expect(btn).toHaveClass(/red/i);
    expect(checkbox).not.toBeChecked();
    // click btn to check class blue
    await user.click(btn);
    expect(btn).toHaveClass(/blue/i);
  });
});

describe('kababCaseToTitleCase', () => {
  it('should work for no hyphens', () => {
    expect(kebabCaseToTitleCase('red')).toBe('Red');
  });
  it('should work with one hyphen', () => {
    expect(kebabCaseToTitleCase('midnight-blue')).toBe('Midnight Blue');
  });
  it('should work with multiple hyphens', () => {
    expect(kebabCaseToTitleCase('medium-violet-red')).toBe('Medium Violet Red');
  });
});

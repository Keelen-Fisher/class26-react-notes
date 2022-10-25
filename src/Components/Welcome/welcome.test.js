import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Welcome from './index';

describe('Welcome Component', () => {
  it('Loads and displays initial data as expected', () => {
    render(<Welcome/>)

    const h1 = screen.getByText('Welcome World');
    expect(h1).toBeInTheDocument();
  });

  it('can change name', () => {
    render(<Welcome/>);

    const input = screen.getByTestId('welcome-input');
    fireEvent.change(input, {target: {value: 'Keelen'}});
    const h1 = screen.getByText('Welcome Keelen');

    expect(h1).toBeInTheDocument();
  })
});

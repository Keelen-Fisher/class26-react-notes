import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from './index.js';

describe('The Header Component', () => {
  it('Renders h1 with props as expected', () => {
    render(<Header greeting="Testing"/>);

    let h1 = screen.getByTestId('header-h1');
    expect(h1).toHaveTextContent('Hello Testing');

    let anotherH1Example = screen.getByText('Hello Testing');
    expect(anotherH1Example).toBeTruthy();
    expect(anotherH1Example).toBeInTheDocument();
  });
});

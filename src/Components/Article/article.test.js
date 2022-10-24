import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Article from './';

describe('The Article Component', () => {
  it('Renders as expected', () => {
    render(<Article />);

    let article = screen.getByTestId('article');
    let h4 = screen.getByTestId('article-h4');
    let p = screen.getByTestId('article-p');

    expect(article).toBeTruthy();
    expect(h4).toBeTruthy();
    expect(p).toBeTruthy();
  });
});

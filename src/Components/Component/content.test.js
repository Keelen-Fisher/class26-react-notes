import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Content from './';

describe('The Content component', () => {
  it('Renders a button that changes the document title', () => {
    const changeTitle = jest.fn();

    render(<Content changeTitle={changeTitle}/>);

    let button = screen.getByTestId('content-button');
    fireEvent.click(button);
    expect(changeTitle).toHaveBeenCalled();
    // missing fire event
    let h3 = screen.getByText('You can make changes to the Document!')
    
    expect(button).toHaveTextContent('Change Title');
    expect(h3).toBeInTheDocument();
  });
});

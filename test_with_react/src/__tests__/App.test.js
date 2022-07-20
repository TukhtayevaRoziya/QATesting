import '@testing-library/jest-dom'

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  it('renders the menu with two burriots & one already in the basket', async() => {
  render(<App />);
    screen.debug()
    const find = await screen.findByText(/data/i)
    const placeholder = await screen.getByPlaceholderText(/Inp Text/i)
    expect(find).toBeInTheDocument()
    expect(find).toHaveStyle({color: 'red'})
    expect(placeholder).toBeInTheDocument()
    screen.debug()

    // expect(getByRole('button')).toBeTruthy();
  });
});

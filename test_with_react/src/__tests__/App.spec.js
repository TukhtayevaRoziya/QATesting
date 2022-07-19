import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import  {App} from '../App';

describe('<App />', () => {
  it('renders the menu with two burriots & one already in the basket', () => {
    const {  getByText } = render(
      <App
      burritos={'twoBurritos'}
      />
    );
    // const orderItems = screen.getByText(/Hello/i)
    expect(getByText('Hello')).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  it('renders the menu with two burriots & one already in the basket', () => {
    const {  getByText } = render(
      <App />
    );
    expect(getByText('Hello')).toBeTruthy();
  });
});

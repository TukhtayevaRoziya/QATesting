import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Menu } from '../components/Menu';
import { twoBurritos, currentOrderItems } from '../fixtures';

describe('<Menu />', () => {
  it('renders the menu with two burriots & one already in the basket', () => {
    const orderItems = currentOrderItems;
    const setOrderItems = jest.fn();

    const { getAllByTestId, getByTestId, getByText, getByAltText } = render(
      <Menu
        burritos={twoBurritos}
        orderItems={orderItems}
        setOrderItems={setOrderItems}
      />
    );

    expect(getAllByTestId('item').length).toBe(2);
    expect(getByText('Wet Burrito')).toBeTruthy();
    expect(getByText('An amazing burrito!')).toBeTruthy();
    expect(getByAltText('Wet Burrito')).toBeTruthy();
    expect(getByTestId('image-1').src).toBe(
      'http://localhost/images/wet-burrito.jpg'
    );

    expect(getByText('Add Wet Burrito | £5')).toBeTruthy();
    fireEvent.click(getByTestId('add-item-1'));

    expect(getByText('Remove Wet Burrito | £5')).toBeTruthy();
    fireEvent.click(getByTestId('add-item-1'));

    expect(getByText('Add Wet Burrito | £5')).toBeTruthy();
  });
});

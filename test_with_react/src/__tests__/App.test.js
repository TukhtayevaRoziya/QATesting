import '@testing-library/jest-dom'

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('<App />', () => {
  // test('renders the menu with two burriots & one already in the basket', async() => {
  // render(<App />);
    // screen.debug()
    // const find = await screen.findByText(/data/i)
    // const placeholder = await screen.getByPlaceholderText(/Inp Text/i)
    // expect(find).toBeInTheDocument()
    // expect(find).toHaveStyle({color: 'red'})
    // expect(placeholder).toBeInTheDocument()
    // screen.debug()
  // });
  test('click event', () => {
    render(<App />);
    // const btn = screen.getByTestId('toggle-btn')
    // const elem = screen.queryByTestId('toggle-elem')
    // expect(elem).toBeNull()
    // fireEvent.click(btn)
    // expect(elem).toBeInTheDocument()
  });
  test('click event', () => {
    render(<App />);
        const placeholder = screen.getByPlaceholderText(/Inp Text/i)
    expect(screen.queryByTestId('value-elem')).toContain('Tr')
    // fireEvent.input(placeholder,{
    //   target: {value: 'sdfsdf'}
    // })
    userEvent.type(placeholder, 'sdfsdf')
    expect(screen.queryByTestId('value-elem')).toContain('sdfsdf')



    // const btn = screen.getByTestId('toggle-btn')
    // const elem = screen.queryByTestId('toggle-elem')
    // expect(elem).toBeNull()
    // fireEvent.click(btn)
    // expect(elem).toBeInTheDocument()
  });
});

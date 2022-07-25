import '@testing-library/jest-dom'

import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  test('click event', () => {
    render(<App />);
  });
});

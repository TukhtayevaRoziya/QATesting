import React from "react";
import ReactDOM from "react-dom";

import {isTSAnyKeyboard} from '@babel/types'

import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-render'

import Button from '../Button'

it('renders without crashing',()=>{
  const div = document.createElement('div')
  ReactDOM.render(<Button/>, div)
})
it('renders without crashing',()=>{
  const {getByTestId} = render(<Button label={'click me please!'}/>)
  expect(getByTestId('button')).toHaveTextContent('click me please!')

})
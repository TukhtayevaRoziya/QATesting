import React from "react";
import ReactDOM from "react-dom";


import { findAllByTestId, fireEvent, render, screen } from "@testing-library/react";
import axios from 'axios'
// @testing-library/react
import User from './User'

jest.mock('axios')

describe('Test', () => {
   let response;
    beforeEach(()=>{
      response = {
        data:[
          {
            "id": 1,
            "name": "Leanne Graham",
            },
            {
            "id": 2,
            "name": "Ervin Howell",
            },
            {
            "id": 3,
            "name": "Clementine Bauch",
            }
        ]
      }
    })
  test('should ', async() => {
    axios.get.mockReturnValue(response)
    const {findAllByTestId } = render(<User/>)
    const users = await findAllByTestId('user-item')
    // const data = await getData()
    expect(users.length).toBe(3)
    expect(axios.get).toBeCalledTimes(1)
    screen.debug()
  })
  
})


const validateValue = require("./ValidateValue")


describe('ValidateValue', ()=>{
  test("false" , ()=>{
    expect(validateValue(50)).toBe(true)
  })
  test("false" , ()=>{
    expect(validateValue(-50)).toBe(false)
  })
  test("false" , ()=>{
    expect(validateValue(101)).toBe(false)
  })
  
})
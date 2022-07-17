const validateValue = require("./ValidateValue")

describe('ValidateValue', ()=>{
  test("false" , ()=>{
    expect(validateValue(50)).toBe(true)
    // validateValuega propsda 50soni berildi bu son 0dan katta 100dan kichik
    // shuning uchun true bo'lishi kerak
  })
  test("false" , ()=>{
    expect(validateValue(-50)).toBe(false)
     // validateValuega propsda -50soni berildi bu son 0dan kichik
    // shuning uchun false bo'lishi kerak
  })
  test("false" , ()=>{
    expect(validateValue(101)).toBe(false)
     // validateValuega propsda 101soni berildi bu son 100dan katta
    // shuning uchun false bo'lishi kerak
  })
})
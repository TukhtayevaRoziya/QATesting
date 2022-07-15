const mapArrToString = require("./mapArrToString")


describe('ValidateValue', ()=>{
  test("false" , ()=>{
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"])
  })
  
})
const mapArrToString = require("./mapArrToString")


describe('ValidateValue', ()=>{
  test("false" , ()=>{
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"])
  })
  test("false" , ()=>{
    expect(mapArrToString([1, 2, 3, undefined, null, "sdfsdfsd"])).toEqual(["1", "2", "3"])
  })
  test("false" , ()=>{
    expect(mapArrToString([])).toEqual([])
  })
  test("false" , ()=>{
    expect(mapArrToString([1,2,3])).not.toEqual([1,2,3,4])
  })
  
})
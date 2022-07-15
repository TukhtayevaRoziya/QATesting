const square = require("./square")

describe('square', ()=>{
  let mockValue;

  beforeEach(()=>{})
  beforeAll(()=>{})

  test("false" , ()=>{
    expect(square(2)).toBe(4)
    expect(square(2)).toBeLessThan(5)
    expect(square(2)).toBeGreaterThan(3)
    expect(square(2)).not.toBeUndefined()
  })

  afterEach(()=>{})
  afterAll(()=>{})
})
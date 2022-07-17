const square = require("./square");

describe("square", () => {
  // let mockValue;

  // beforeEach(()=>{})
  // beforeAll(()=>{})

  test("called times", () => {
    // expect(square(2)).toBe(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeUndefined()

    // bularni commentdan ochib ham ishlatish mumkin
    // 1-sida 2ning kvadrati 4 bo'lishi kerak
    // 2-sida 2ning kvadrati 5dan kam bo'lishi kerak
    // 3-sida 2ning kvadrati 3dan ko'p bo'lishi kerak
    // 4-sida 2ning kvadrati undefinedga teng bo'lishi kerak emas!

    const spyMathPow = jest.spyOn(Math, "pow");

    square(2);
    square(1);
    expect(spyMathPow).toBeCalledTimes(1);

    // bunda square 2 marta chaqirilyapti
    // lekin uning ichidagi Math.pow 1 marta ishlatilyapti
    // Chunki 1 soni propsda borsa Math.pow ishlamasdan 1 qaytishi kerak edi
    // shuning uchun called times 1
  });
  test("called times", () => {
    const spyMathPow = jest.spyOn(Math, "pow");

    square(1);
    expect(spyMathPow).toBeCalledTimes(0);

    // bu yerda Math.pow ishlatilmayapti sababi tepada bor
    // shuning uchun called times 0
  });

  test("called times", () => {
    const spyMathPow = jest.spyOn(Math, "pow");

    square(2);
    square(3);
    expect(spyMathPow).toBeCalledTimes(2);

    // bu yerda Math.pow 2 mrta ishlatilyapti
    // shuning uchun called times 2
  });

  test("called times", () => {
    const spyMathPow = jest.spyOn(Math, "pow");

    square(0);
    expect(spyMathPow).toBeCalledTimes(1);
    // bu yerda Math.pow 1 mrta ishlatilyapti
    // shuning uchun called times 1
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // afterEach = har biridan keyin
  // spyOn jestning Mocks lari ichiga kiradi
  // har biridan keyin Mockslarni tozalaydi
  // chunki 1-test ishlab u tozalanmasa 2-testda called soni 1-si qo'shiladi
  // 1-sida 2ta called times bo'lsa 2-sida 1ta bo'lsa 2-sining called timesiga 3 deb yozishimiz kerak edi
  // lekin biz har bir testdan keyin clearAllMocks deb ularni tozalab qo'ydik

  // afterAll(()=>{})
});

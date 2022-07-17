const mapArrToString = require("./mapArrToString");

describe("ValidateValue", () => {
  test("false", () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
    // mapArrToString propisiga arrayda number berilyapti
    // va u ["1", "2", "3"] shunga teng bo'lishi kerak

    // savol tug'ilishi mumkin nimaga toBe emas toEqual Sababi toEqual obj, arr ni tekshiradi
    // agar obj va arr ni tekshirish kerak bo'lsa toEqual ishlatamiz
  });
  test("false", () => {
    expect(mapArrToString([1, 2, 3, undefined, null, "sdfsdfsd"])).toEqual([
      "1",
      "2",
      "3",
    ]);
    // mapArrToString propisiga arrayda number, undefined, null, str berilyapti
    // va u ["1", "2", "3"] shunga teng bo'lishi kerak,
    // undefined, null, str filterdan o'tmay tashlab yuborilyapti
  });
  test("false", () => {
    expect(mapArrToString([])).toEqual([]);
    // mapArrToString propisiga array bo'sh berilyapti
    // va u [] shunga teng bo'lishi kerak,
  });
  test("false", () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    // mapArrToString propisiga arrayda number berilyapti
    // va bu yerda .not. degan joyi bor shuning uchun ham to'g'ri tekshiriladi
    // yani [1,2,3]ni bersak bizga [1,2,3,4]ni qaytarmaydi demoqchi
  });
});

const delay = require("./delay");

describe("delay", () => {
  test("num", async () => {
    const sum = await delay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
    expect(sum).not.toBe(11);
  });
  // delayga callback funtion berildi unda 5+5 matematik amal qo'llanildi
  // propsning 2-ms ga 1000soni yuborildi
});

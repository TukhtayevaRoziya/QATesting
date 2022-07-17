const delay = (callback, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(callback());
      reject("some error!");
    }, ms);
  });
};

// bu promise rad etilmasa callback chaqiriladi, callBack propsdan yuboriladi
// rad etilsa xato deb message chiqadi

module.exports = delay;

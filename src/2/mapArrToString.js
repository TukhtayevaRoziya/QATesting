const mapArrToString = (err) => {
  return err.filter((item) => Number.isInteger(item)).map(String);
};

module.exports = mapArrToString;

// mapArrToStringning propsiga berilgan son filterlanadi va butun raqamlari qa'bul qilinadi
// va butun raqamlar string bo'lib qaytadi
const mapArrToString = (err) => {
  return err
  .filter(item=>Number.isInteger(item))
  .map(String)
}

module.exports = mapArrToString
const validateValue = (values)=>{
  if (values < 0 || values > 100) {
    return false
  }
  return true
}

module.exports = validateValue
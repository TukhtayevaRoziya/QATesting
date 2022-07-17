const validateValue = (values)=>{
  if (values < 0 || values > 100) {
    return false
  }
  return true
}

module.exports = validateValue

// 0 dan 100gacha bo'lgan sonlarga true qaytaradi 
// 0 dan kichik, 100dan katta sonlarga false qaytaradi
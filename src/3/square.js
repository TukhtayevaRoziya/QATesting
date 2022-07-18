const square = (number) =>{
  if(number === 1){
    return 1
  }
  return Math.pow(number, 2)
}

// bu agar squarening propsiga 1 raqami kelsa returnda bir qaytadi
// agar 1dan boshqa son bo'lsa uning kvadrati qaytadi(2-darajasi)
// ya'ni 7ning 2-darajasi 49

module.exports = square
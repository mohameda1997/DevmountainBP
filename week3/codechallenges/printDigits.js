const printDigits = num => {
    while (num) {
      let digitToPrint = num % 10
      console.log(digitToPrint)
      num = (num - digitToPrint) / 10
    }
  }
  
//   printDigits(1)
//   printDigits(162)
//   printDigits(597842)
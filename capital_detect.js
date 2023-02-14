function countTheCapitals(string) {
  
    let numUpper = string.length - string.replace(/[A-Z]/g, '').length;  
    return numUpper
    }


    countTheCapitals("Northcoders")
// should return 1
countTheCapitals("lower")
// should return 0
countTheCapitals("Hello there WORLD")
// should return 6
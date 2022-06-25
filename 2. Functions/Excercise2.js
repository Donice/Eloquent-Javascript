// RECURSSION

function isEven(number) {
   if(number < 0) {
      number = Math.abs(number)
      // turns the number entry into an absolute number
   } 
   if(number == 0) {
      return true
   } else if (number == 1) {
      return false
   } else {  
      return isEven(number-2)
      // this return reduces the number by 2
   }
}

console.log(isEven(-120))

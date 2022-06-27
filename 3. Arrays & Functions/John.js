// 1. METHOD.........................................
function addItemsArray(array) {
   let arraySum = 0;
   for(let i = 0; i < array.length; i++) {
      let specificNumber = array[i]
      arraySum += specificNumber
   }
   return console.log(arraySum)
}

addItemsArray([2, 9, 6, 9, 5]) // -> 31


// METHOD 2..........................................
function addItemsArray2(array) {
   let arraySum = 0;
   for(let i of array) {
      let specificNumber = array[i]
      arraySum += specificNumber
   }
   return console.log(arraySum)
}

addItemsArray([9, 10, 4, 4, 19]) // -> 46

// REVERSING AN ARRAY

function reverseArray(array) {
   let newArr = []
   for(let i = array.length-1; i >= 0; i--) {
      let index = array[i]
      newArr.push(index)
   }

   return console.log(newArr)
}

reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9])

function reverseArrayInPlace(array) {
   let newArr = []
   for(let i = array.length-1; i >= 0; i--) {
      let index = array[i]
      newArr.push(index)
   }
   array = newArr
   
   console.log(array)
   return console.log(newArr)
}

reverseArrayInPlace([19, 2, 1, 5, 3, 7, 9, 10])


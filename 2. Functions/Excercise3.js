// BEAN COUNTING 

function countBs(string) {
   let count = 0;
   for(let i = 0; i < string.length; i++) {
      let index = string[i];
      if(index === 'B') {
         count += 1
      } else {
         count
      }
   }
   return console.log(count)
}

countBs('BURY BARBADOS')
// -> 3

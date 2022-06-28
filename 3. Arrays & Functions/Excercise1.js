// THE SUM OF A RANGE


function range(a, b, step = 1) {
  let sum = [];
  let inc = Math.abs(step)

  while (a <= b) {
    sum.push(a)
    a += inc
  }
  while (a >= b) {
   sum.push(a)
   a -= inc
  } 
  return console.log(sum);
}
range(1, 10, 2)
range(10, 1, -2);


function sum(array) {
   let sum = 0
   for(let i of array) {
      sum += i
   }
   return console.log(sum);
}
sum([10, 2, 8, 5]);

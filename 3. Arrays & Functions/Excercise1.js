// THE SUM OF A RANGE

function range(a, b) {
  let sum = 0;
  while (a <= b) {
    sum += a;
    a++;
  }

  return console.log(sum);
}

range(1, 15);

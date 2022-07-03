/*
Abstractions hide details and give us the ability to talk about
problems at a higher (or more abstract) level
*/

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
// repeatLog(5)

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
// repeat(3, console.log)

let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});
// console.log(labels);

/*
 Functions that operate on other functions, either by taking
 them as arguments or by returning them, are called higher-order 
 functions
*/

// 1.
function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(99));
// console.log(greaterThan(10)(99));

// 2.
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
// noisy(Math.min)(3, 2, 1)
let noisyMax = noisy(Math.max);
// noisyMax(3, 2, 1);

// 3.
function unless(test, then) {
  if (!test) then();
}
repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    // console.log(n, "is even");
  });
});

//4.
const array1 = ["a", "b", "c"];
// array1.forEach(item => console.log(item))

//..........................................
// STANDARD ARRAY METHODS
const Scripts = require("./Scripts");

// FILTER METHOD
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return console.log(passed);
}
// filter(Scripts, script => script.living)
// console.log(Scripts.filter(s => s.direction == 'ttb'))

// MAPPING METHOD
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = Scripts.filter((s) => s.direction == "rtl");
// console.log(map(rtlScripts, (s) => s.name));

// REDUCE METHOD
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return console.log(current);
}

// reduce([11, 2, 3, 4], (a, b) => a + b, 0);
// console.timeLog([1, 2, 3, 4].reduce((a, b) => a + b));

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}
console.log(
  Scripts.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  })
);

let biggest = null;
for (let script of Scripts) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
console.log(biggest);

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
console.log(Math.round(average(
  Scripts.filter(s => s.living).map(s => s.year))));

console.log(Math.round(average(
  Scripts.filter(s => !s.living).map(s => s.year))));

let totalYears = 0, countYears = 0;
for (let script of Scripts) {
  if (script.living) {
    totalYears += script.year;
    countYears += 1;
  }
}

console.log(Math.round(totalYears / countYears));
   
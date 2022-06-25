// Object.assign() copies all properties from one object into another
let obj = {
  a: 1,
  b: 2,
  c: 3,
};

Object.assign(obj, {
  b: 5,
  e: 7,
});

// ..........................................

// Object.keys() returns keys in a object
const objMe = {
  name: "Donice Ubaru",
  age: "2*",
  uni: "University of Benin",
};

// console.log(
//   Object.keys({
//     name: "Donice Ubaru",
//     age: "2*",
//     uni: "University of Benin",
//   })
// );

// .............................................

let Journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "televison"],
    squirrel: false,
  },
  {
    events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree"],
    squirrel: false,
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "bear"],
    squirrel: true,
  },
];

// MUTABILITY...........................

const score = { visitors: 0, home: 0 };
// console.log(score);

// ......................................

let journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "televison"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree"],false)
addEntry(["weekend", "cycling", "break", "peanuts", "bear"], true)

console.log(journal)


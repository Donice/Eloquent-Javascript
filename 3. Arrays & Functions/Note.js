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
addEntry(
  ["work", "ice cream", "cauliflower", "lasagna", "touched tree"],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "bear"], true);

// console.log(journal)

// .........................................

// function phi(table) {
//   return (
//     (table[3] * table[0] - table[2] * table[1]) /
//     Math.sqrt(
//       (table[2] + table[3]) *
//       (table[0] + table[1]) *
//       (table[1] + table[3]) *
//       (table[0] + table[2])
//     )
//   );
// }

function phi([n00, n01, n10, n11]) {
  return (
    (n11 * n00 - n10 * n01) /
    Math.sqrt(
      (n10 + n11) *
      (n00 + n01) *
      (n01 + n11) *
      (n00 + n10)
    )
  );
}
//................................................

const JOURNAL = require("./JOURNAL");

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
//..........................................

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

for (let event of journalEvents(JOURNAL)) {
  // console.log(event + ":", phi(tableFor(event, JOURNAL)));
}

//.........................................

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    // console.log(event + ":", correlation);
  }
}

//.........................................

for (let entry of JOURNAL) {
  if (
    entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")
  ) {
    entry.events.push("peanut teeth");
  }
}
// console.log(phi(tableFor('peanut teeth', JOURNAL)));

//...........................................

let todoList = [];
function remember(task) {
  todoList.push(task);
}
remember("Bath");
// console.log(todoList)

function getTask() {
  return todoList.shift();
}
getTask();
// console.log(todoList)

function rememberUrgently(task) {
  todoList.unshift(task);
}
rememberUrgently("Brush");
// console.log(todoList)

//..........................................

const Arr = [1, 3, 2, 4, 2, 8, 9, 2, 0, 8, 3];
// console.log(Arr.indexOf(2, 3))
// console.log(Arr.lastIndexOf(3))

//.........................................

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

// console.log(remove(Arr, 3))

//.........................................

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

// console.log(max(4, 1, 9, -2))

let numbers = [5, 1, 7];
// console.log(max(...numbers))

//.........................................

function randomPointOncircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}
console.log(randomPointOncircle(2))

//........................................

let {name} = {name: "Faraji", age: 23}
// console.log(name)

// JSON ..................................

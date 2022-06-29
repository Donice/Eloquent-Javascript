// A LIST
let array = [9, 4, 8];

function arrayToList(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (i < arr.length - 1) {
      var list = { value: arr[i], rest: list };
    } else {
      var list = { value: arr[i], rest: null };
    }
  }
  return console.log(list);
}

arrayToList(array);


function listToArray(list) {
  let listArray = [];
  for (let index = list; index; index = index.rest) {
    listArray.push(index.value);
  }
  return console.log(listArray);
}

listToArray({ value: 9, rest: { value: 4, rest: { value: 8, rest: null } } });



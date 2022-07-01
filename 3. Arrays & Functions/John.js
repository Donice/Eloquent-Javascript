const message = function (names) {
  let str = "The names are";
  let nameStr = "";

  if (names.length < 4) {
    for (let i of names) {
      nameStr += ` ${i}`;
    }
    str += nameStr;
  } else {
    for(let i = 0; i < 3; i++) {
      nameStr += ` ${names[i]}`;
    }
    str += nameStr + ` with ${names.length - 4} more`;
  }

  return console.log(str);
};

let name = ["Faith", "Love", "Isaiah", "Naomi"];

message(name);

// A LIST

let array = [2, 4, 1, 5, 2, 7, 8]

// 1.
function arrayToList(array) {                           //1. takes in an array as arguement
  let object = {};                                        //2. initializes an empty object
  if (Array.isArray(array)) {                             //3. if the arguement, array is an object?
    let currListItem = object;                              //4. let currListItem become the initialized empty onject
    for (let item of array) {                               //5. for every item on the array arguement {
      let newListItem = {                                     //6. let declare an object newListItem, that has the keys: {
      	value: item,                                            //7. i. value, with the prop, item - thats the current item being iterated over; and
      	rest: null                                              //8. ii. rest, withe the prop as null
      };                                                        //9. }
      if (typeof currListItem.rest === 'undefined') {         //10. if the data type of the rest key, of currListItem(i.e object) is undefined, then; {
        object = newListItem;                                   //11. let the newListItem, defined in 6. become the object;
      } else {                                                //12. } or else {
      	currListItem.rest = newListItem;                        //13. let the newListItem, become the rest key
      }                                                       
      currListItem = newListItem;                             //14. then the currListItem, which is the object (ref 2.) takes in all the properties of the newListItes
    }
  }
  // return console.log(JSON.stringify(object));           //15. then the function returns the object (ref 14. 2.)   
  return console.log(object);     
}

arrayToList(array)

// 2.
function listToArray(list) {                                    //1. Declare a listToArray function that accepts a list as an arguement
  let array = [];                                                 //2. declare an empty array with an 'array' binding
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) { //3. if the type of the incoming list arguement is 'undefined' OR
    return array;                                                 // the value/rest key of the list is 'undefined', THEN return the array (ref 2.) 
  } else {                                                        //5. or else,
    array.push(list.value);                                       //6. push the list key,'value', to the array (ref 2.)
    while (list.hasOwnProperty('rest') && list.rest !== null) {   //7. while(list has a 'rest' key AND the data type of the prop of that rest key isnt null),
      list = list.rest;                                           //8. the list.rest is now assigned to the list binding
      if (list.hasOwnProperty('value')) {                         //9. if the list has a 'value' key?
      	array.push(list.value);                                   //10. Push the value of the key into the array (ref 2.)
      }
    }
  }
  return console.log(JSON.stringify(array));                      //11. return the array (ref 2.)
}

listToArray({"value":2,"rest":{"value":4,"rest":{"value":1,"rest":{"value":5,"rest":{"value":2,"rest":{"value":7,"rest":{"value":8,"rest":null}}}}}}});

// 3.
function prepend(element, list) {
  return console.log(JSON.stringify({
    value: element,
    rest: list
  }));
}

// prepend(10, prepend(20, null));

// 4. a
function nth(list, number) {
  return console.log(JSON.stringify(listToArray(list)[number]));
}

// nth(arrayToList([10, 20, 30]), 1);

// 4. b
function nthRecursive(list, number) {
  if (number === 0) {
    return list.value;
  } else if (list.rest === null) {
    return undefined;
  } else {
    return nthRecursive(list.rest, number-1);
  }
}

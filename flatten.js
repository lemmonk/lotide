const eqArrays = function(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {

    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      
      for (let j = 0; j < arr1[i].length; j++) {
        if (arr1[i][j] !== arr2[i][j]) {
          return false;
        }
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }

  }

  return true;

};


const assertArrayEquals = function(actual, expected) {

  const compare = eqArrays(actual,expected);


  if (compare) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }


};

const bagOfCandy = ['chocolate bars', ['gum'],['candy apple', 'soda'], 'chips'];

const flatten = function(bag) {

  let flattenedBag = [];
  
  for (let candy of bag) {
    if (Array.isArray(candy)) {

      for (let nested of candy) {
        flattenedBag.push(nested);
      }

    } else {
      flattenedBag.push(candy);
    }
  }

  return flattenedBag;

};

console.log(flatten(bagOfCandy));
assertArrayEquals(bagOfCandy, ['chocolate bars', ['gum'],['candy apple', 'soda'], 'chips']);
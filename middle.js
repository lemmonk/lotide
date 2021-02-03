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


const middle = function(arr) {

  const midValues = [];

  if (arr.length < 3) {
    return midValues;
  }

  if (arr.length % 2 === 0) {

    const mid1 = Math.round(arr.length / 2 - 1);
    const mid2 = Math.round(arr.length / 2);

    midValues.push(arr[mid1]);
    midValues.push(arr[mid2]);
   

  } else {
    const mid = Math.round(arr.length / 2 - 1);
    midValues.push(arr[mid]);
  }

  return midValues;
};

console.log(middle([1]));//[]
console.log(middle([1, 2]));//[]
console.log(middle([1, 2, 3]));//2
console.log(middle([1, 2, 3, 4, 5]));//3
console.log(middle([1, 2, 3, 4]));//2,3
console.log(middle([1, 2, 3, 4, 5, 6]));//3,4

const words = ["hello", "world", "lighthouse"];
middle(words);
assertArrayEquals(words, ["hello", "world", "lighthouse"]);
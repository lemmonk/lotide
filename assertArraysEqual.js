// const eqArrays = function(arr1, arr2) {

//   for (let i = 0; i < arr1.length; i++) {

//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }

//   }

//   return true;

// };

const eqArrays = function(arr1, arr2) {

  let length = arr1.length;

  if (arr1.length < arr2.length) {
    length = arr2.length;
  }

  for (let i = 0; i < length; i++) {

    if (arr1[i] !== arr2[i]) {
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

assertArrayEquals([1,2,3],[1,2,3]);
assertArrayEquals([1,2,'3'],[1,2,3]);
assertArrayEquals([1,2,3],[1,4,3]);
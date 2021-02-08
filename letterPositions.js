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




const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
     
    if (results[sentence[i]] !== undefined) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }

  }

  return results;
};

console.log(letterPositions('hello'));

assertArrayEquals(letterPositions("hello").e, [1]);
assertArrayEquals(letterPositions("hello").l, [2, 3]);


module.exports = letterPositions;
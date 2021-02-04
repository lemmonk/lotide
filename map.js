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



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);



assertArrayEquals(results1[0],words[0][0]);
assertArrayEquals(results1[1],words[1][0]);
assertArrayEquals(results1[2],words[2][0]);
assertArrayEquals(results1[3],words[3][0]);
assertArrayEquals(results1[4],words[4][0]);

assertArrayEquals(words,["ground", "control", "to", "major", "tom"]);
assertArrayEquals(results1,words);


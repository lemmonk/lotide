const eqArrays = function(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {

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




const without = function(source,itemsToRemove) {

  const newSource = [];

  for (let i = 0; i < source.length; i++) {
    let matching = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
    
      if (source[i] === itemsToRemove[j]) {
        matching = true;
      }

    }

    if (!matching) {
      newSource.push(source[i]);
    }
  }

  return newSource;
};



console.log(without([1, 2, 3], [1,3]));
console.log(without(["1", "LHL", "3"], ['1', "2", "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEquals(words, ["hello", "world", "lighthouse"]);
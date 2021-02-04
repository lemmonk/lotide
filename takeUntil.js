
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




const takeUntil = function(array, callback) {
  const newArr = [];

  for (const data of array) {
    
    if (!callback(data)) {
      newArr.push(data);
    } else {
      return newArr;
    }

  }

 
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const testData1 = [1, 2, 5, 7, 2];
const testData2 = ["I've", "been", "to", "Hollywood"];
assertArrayEquals(results1,testData1);
assertArrayEquals(results1,data1);
assertArrayEquals(results2,testData2);
assertArrayEquals(results2,data2);
const eqArrays = require('./eqArrays');

const assertArrayEquals = function(actual, expected) {

  const compare = eqArrays(actual,expected);


    if (compare) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }


};

module.exports = assertArrayEquals;

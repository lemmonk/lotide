// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};




const countLetters = function(letters) {

  let results = {};
  letters = letters.replaceAll(' ','');


  for (let char of letters) {

    if (results[char] !== undefined) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }

  }

  return results;
};


const letters = "Hello World";
console.log(countLetters(letters));

const result1 = countLetters(letters);

assertEqual(result1["H"], 1);
assertEqual(result1["l"], 3);
assertEqual(result1["X"], undefined);
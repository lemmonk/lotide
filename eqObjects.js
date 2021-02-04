// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

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



const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  const keys = Object.keys(object1);

  for (let k of keys) {
  
    if (Array.isArray(object1[k]) && Array.isArray(object2[k])) {

      const compare = eqArrays(object1[k],object2[k]);

      if (!compare) {
        return false;
      }

    } else if (object1[k] !== object2[k]) {
      return false;
    }
  }
  return true;
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));
assertEqual(eqObjects(ab,ba), true);

const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc));
assertEqual(eqObjects(ab,abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
assertEqual(eqObjects(cd,dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
assertEqual(eqObjects(cd,cd2), false);



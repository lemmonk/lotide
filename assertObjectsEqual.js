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


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  const compare = eqObjects(actual,expected);


  if (compare) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  
    
  }

};

const obj1 = {
  firstName: 'Kyle',
  lastName: 'Lemmon',
};

const obj2 = {
  firstName: 'Kyle',
  lastName: ['James','Lemmon'],
};

const obj3 = {
  firstName: 'Kyle',
  lastName: 'Lemmon',
};


assertObjectsEqual(obj1,obj2);// => false
assertObjectsEqual(obj1,obj3); // => true

module.exports = assertObjectsEqual;


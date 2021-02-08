
// const eqArrays = function(arr1, arr2) {

//   let length = arr1.length;
const eqArrays = function(arr1, arr2) {

  let length = arr1.length;

  if (arr1.length < arr2.length) {
    length = arr2.length;
  }

  for (let i = 0; i < length; i++) {

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


module.exports  = eqArrays;
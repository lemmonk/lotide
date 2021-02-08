const middle = function(arr) {

  const midValues = [];

  if (arr.length < 3) {
    return midValues;
  }

  if (arr.length % 2 === 0) {

    const mid1 = Math.round(arr.length / 2 - 1);
    const mid2 = Math.round(arr.length / 2);

    midValues.push(arr[mid1]);
    midValues.push(arr[mid2]);
   

  } else {
    const mid = Math.round(arr.length / 2 - 1);
    midValues.push(arr[mid]);
  }

  return midValues;
};


module.exports = middle;
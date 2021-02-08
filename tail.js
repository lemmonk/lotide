const tail = function(arr) {

  if (arr === undefined) {
    return undefined;
  }

  let tailing = [];

  if (arr.length > 0) {
    tailing = arr.splice(1,arr.length - 1);
  }

  return tailing;
};


module.exports = tail;



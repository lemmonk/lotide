const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(arr) {

  let tailing = [];
  for (let i = 0; i < arr.length; i++) {

    if (i > 0) {
      tailing.push(arr[i]);
    }
  }


  return tailing;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

const empty = [];
assertEqual(tail(empty).length,0);

const single = 'single';
assertEqual(tail(single.length).length, 0);

x = 12;
if(true) {
  x + 2;
  x = 4;
}
console.log(x);
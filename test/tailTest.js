const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

const empty = [];
assertEqual(tail(empty).length,0);

const single = 'single';
assertEqual(tail(single.length).length, 0);

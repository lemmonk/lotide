
const assertArrayEquals = require('../assertArraysEqual');
const middle = require('../middle');


const words = ["hello", "world", "lighthouse"];
const words2 = ["mercury", "venus", "earth","mars"];

assertArrayEquals(middle(words), ["world"]);
assertArrayEquals(middle(words2), ["venus","earth"]);

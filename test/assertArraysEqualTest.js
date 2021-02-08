
const assertArrayEquals = require('../assertArraysEqual');


assertArrayEquals([1,2,3],[1,2,3]);
assertArrayEquals([1,2,'3'],[1,2,3]);
assertArrayEquals([1,2,3],[1,4,3]);
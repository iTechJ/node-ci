const assert = require('assert');

const obj1 = {a: {b : 1}};
const obj2 = {a: {b : 1}};

assert.deepEqual(obj1, obj2);
console.log("Simple test passed.");



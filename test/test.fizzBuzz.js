const assert = require('assert');
const fizzBuzz = require('../lib/fizzBuzz');

describe('fizzBuzz', function() {

  it('counts to 16 without ever having to drink', function() {
    assert.deepEqual(fizzBuzz(16), [
      1, 
      2, 
      'fizz', //3
      4, 
      'buzz', //5
      'fizz', //6
      7,
      8,
      'fizz', //9
      'buzz', //10
      11,
      'fizz', //12
      '13',
      14,
      'fizzbuzz', //15
      16
    ]);
  });
});
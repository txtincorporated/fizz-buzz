Create a "standard" project:
* (forked) GitHub repo
* npm `package.json`
* build scripts (`lint`, `test`, `watch`)
* `.eslintrc`, `.gitignore`
* `README.md`
    * How to develop/run
    * Contributor Guidelines
    * LICENSE.md
    * how to use (may be on github pages)

That's a tested fizz-buzz module:
* takes an integer `n`
* returns array of length `n` 
    * numbers in sequence up to `n`
    * divisible by 3? `fizz`
    * divisible by 5? `buzz`
    * both? `fizz buzz`
* example test assertion:
    ```
    assert.deepEqual(fizzBuzz(16), [
        1, 
        2, 
        'fizz',     // 3
        4, 
        'buzz',     // 5
        'fizz',     // 6
        7, 
        8, 
        'fizz',     // 9
        'buzz',     // 10
        11,
        'fizz',     // 12
        13,
        14,
        'fizzbuzz', // 15
        16
    ]);
    ```

---
title: 'How to implement Array.prototype.map method'
date: '2022-11-08'
slug: 'array-prototype-map-implement'
tags: ['Array']
---

`Array.prototype.map` creates a new array populated with the results of calling a provided function on every element 
in the calling array.

Implement `Array.prototype.map`.To avoid overwriting the actual `Array.prototype.map` which is being used by the 
auto-grader,we shall instead implement it as `Array.protoype.myMap`.

code examples

```javascript
[1,2,3,4].myMap((i) => i+ 1); // [2,3,4,5]
[1,2,3,4].myMap((i) => i * i);// [1,4,9,16]
```

## Notes

The map callback function takes in more than just the element!There's also a second parameter for `Array.prototype.
map` as well.You are recommended to read the specification for `Array.prototype.map` on MDN docs before attempting.

## Solution

This question is pretty straightforward and just test that you know how to access the array values within `Array.
prototype` methods(using this).

Initialize a new array to store the mapped results.As we loop the array(via this),call the callback on each array 
element with the following parameters:`element`,`index`,`array`,and `this`.This can be done by either using `Array.
protype.call` or `Array.prototype.apply`.

```javascript
/**
 * @callback callbackFn
 * @param {object} thisArg
 * @return {Array}
 */
Array.prototype.myMap = function(callbcakFn,thisArg) {
    const len = this.length;
    const array = new Array(len);
    for (let i = 0; i <len ; i++) {
        // Ignore index if value is not defined for index(e.g in sparse arrays)
        if(Object.hasOwn(this, k)) {
            array[i] = callbcakFn.call(thisArg, this[i],i, this);
        }
    }
    return array;
}
```

## Edge Cases

- Passing the `index` and `array` to the map callback.
- Calling the map callback with the correct `this` if `thisArg` is specified
- Sparse array(e.g [1,2,,4]).The empty values should be ignore while traversing the array

Mutating the array in the map callback is a bad idea and can cause unintended consequences.The provided solution 
does not following the TC39 specification for array mutation scenario,neither does the auto-grader check for the 
specification behavior for mutations.

You probably won't be asked to implement the specification behavior during interview but it is still a positive 
signal to mention that mutation of the array within the callback is possible but your code might not following the 
specification for it.

The `thisArg` doesn't do anything if the callback is defined as an arrow function as arrow function don;t have their 
own bindings to `this`.

## Spec Solution

Here's solution that is based off the `Array.prototype.map`

```javascript
Array.prototype.myMap = function(callbackFn, thisArg) {
    if(
        typeof callbackFn !== 'function' ||
        !callbackFn.call ||
        !callbackFn.apply
    ) {
        throw new TypeError(`${callbackFn} is not a function`)
    }
    const len = this.length;
    const array = new Array(len);
    let k = 0;
    while (k < len) {
        const kPresent = Object.hasOwn(this, k);
        if(kPresent) {
            array[k] = callbackFn.call(thisArg, this[k], k, this)
        }
        k++;
    }
    return array;
}
```
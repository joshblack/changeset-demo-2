"use strict";

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
module.exports = function sub(...numbers) {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    result -= numbers[i];
  }

  return result;
};

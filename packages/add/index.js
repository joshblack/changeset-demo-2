"use strict";

module.exports = function add(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
};

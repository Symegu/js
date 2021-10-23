"use strict";

/**
 * Возводит число в степень.
 * @param {number} x Число, которое возводится в степень.
 * @param {int} n Степень, в которую возводим число.
 * @return {number} Результат возведения числа в степень.
 */
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

const x = prompt('x?', '');
const n = prompt('n?', '');

if (n < 0) {
  alert(`Степень ${n} не поддерживается, введите степень больше нуля.`);
} else {
  alert(pow(x, n));
}
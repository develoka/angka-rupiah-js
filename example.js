// Run `node example.js` in terminal

const toRupiah = require('./'); // require the `index.js` file from the same directory.

console.log(
  toRupiah(1776500, {symbol: false})
)
console.log(
  toRupiah(1776500.2147, {dot: ',', decimal: '.', symbol: false, floatingPoint: 2})
)

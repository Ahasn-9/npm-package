// index.js
module.exports = {
  findMax: function (arr) {
    if (!Array.isArray(arr)) throw new Error("Input must be an array.");
    return Math.max(...arr);
  },
  findMin: function (arr) {
    if (!Array.isArray(arr)) throw new Error("Input must be an array.");
    return Math.min(...arr);
  },
  sumArray: function (arr) {
    if (!Array.isArray(arr)) throw new Error("Input must be an array.");
    return arr.reduce((acc, num) => acc + num, 0);
  },
};

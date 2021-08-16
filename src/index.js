
exports.min = function min(array) {
  if (!Array.isArray(array) || !array.length) { return 0 };

  return array.sort((a, b) => a - b)[0];
}

exports.max = function max(array) {
  if (!Array.isArray(array) || !array.length) { return 0 };

  return array.sort((a, b) => a - b)[array.length - 1];
}

exports.avg = function avg(array) {
  if (!Array.isArray(array) || !array.length) { return 0 };

  let sum = 0;
  for (i = 0; i <= array.length - 1; i++) {
    sum += array[i];
  }
  return (sum / array.length);
}

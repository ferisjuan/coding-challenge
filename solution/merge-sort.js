const mergeSort = (logArr) => {
  if (logArr.length <= 1) {
    return logArr;
  }

  const middle = Math.floor(logArr.length / 2);
  const left = logArr.slice(0, middle);
  const right = logArr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0].last.date < right[0].last.date) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}

module.exports = mergeSort;

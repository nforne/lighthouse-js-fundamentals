function range(start, end, step) {
  let arr = [];
  /* The function should return an empty array [] if given incorrect parameters, such as:
start, end, or step being undefined
start being greater than end
step being 0, or negative */

  if ((typeof(start) === "undefined" || typeof(end) === "undefined" || typeof(step) === "undefined") || (start > end) || (step <= 0)) {
    return arr
  } else {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

console.log(range(-5, 3, 2));
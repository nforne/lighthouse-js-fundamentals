function lastIndexOf(array, value) {
  let checkArray = [];
  if (array === [] || value === "") {
    // return "array or value is unacceptable";
  } else {
    //  loop in reverse and stop at the first occurrence
    for (let i = array.length; i >= 0; i--) { 
      if (array[i] === value) {
        checkArray.push(i);
        break;
      } else {
        continue;
      }
    }
    // checkArray.length === 0 ? return -1 : return checkArray[0];
    if (checkArray.length === 0) {
      return -1;
    } else {
      return checkArray[0];
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
const howManyHundreds = function (numOfBottles) {
  return ((numOfBottles - (numOfBottles % 100)) / 100); // no float
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

/* var x = 9 / 2;
console.log(x); // 4.5

x = ~~x;
console.log(x); // 4

x = -3.7
console.log(~~x) // -3
console.log(x | 0) // -3
console.log(x << 0) // -3*/

/*const howManyHundreds = function (numOfBottles) {
  let num = numOfBottles / 100;
  let t = num.toString();
  for (let i = 0; i < t.length; i++) {
    if (t[i] === '.') {
      for (let j = t.indexOf('.'); j < t.length; j++) {
        t = t.replace(t[j], '');
      }
      num = Number(t);
    } else {
      num = Number(t);
    }
  }
  return num; // no float
}*/
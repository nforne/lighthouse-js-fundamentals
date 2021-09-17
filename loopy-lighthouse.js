for (let i = 100; i <= 200; i++) {
  if (i % 4 === 0 && i % 3 === 0) {
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  };
}

// for (let i = 100; i <= 200; i++) {
//     console.log(i);
//   }

// traditional for loops
const amounts = [61.00, 52.25, 112.99, 5.00]; 
const total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);
// newer for...of loops - simpler

/*const total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);*/

const total = 0;
for (let i of amounts) {
  total += i;
}
console.log('Order total is: ', total);

// -----------------------------------------------

function buildTriangle(num) {
    let str = '';   //to store triangle in one string
    let t = ''      // to accumulate * strings
    for (let i = 1; i <= num; i++) {
        t += '*'
        str += t + '\n';
    }
    str.slice(0, str.length - 2);
    return str
}
console.log(buildTriangle(10));
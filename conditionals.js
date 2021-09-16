const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (!cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
//-----------------------------------------------
//const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
//-----------------------------------------------

const temperature = 25;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//----------------------------------------------

/*Logical operators
if statements become even more powerful when we understand how to use logical operators in conjunction with them. JavaScript's logical operators are:

&& - logical AND
|| - logical OR
! - logical NOT.*/

const isCitizen = true;
const age = 25;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


if (!raining) {
  console.log("Leave your umbrella at home!");
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




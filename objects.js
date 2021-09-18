var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   }
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.>>>>>>>>

/*
 * Programming Quiz: Umbrella (7-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

var umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  },
  // your code goes here
  close: function() {
      if (umbrella.isOpen === false) {
          return "The umbrella is already closed!";
      } else {
          umbrella.isOpen = false;
          return "Julia closes the umbrella!";
      }
  }
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Object-literal notation
var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*Directions:
Create a breakfast object to represent the following menu item:

The Lumberjack - $9.95
eggs, sausage, toast, hashbrowns, pancakes
The object should contain properties for the name, price, and ingredients.*/

/*
 * Programming Quiz: Menu Items (7-2)
 * Create an object named `breakfast`. 
 * The object should contain properties for the `name`, `price`, and `ingredients`.
 * Print the entire object on the console
 */

// your code goes here
var breakfast = {
  name : 'The Lumberjack',
  price : '$9.95',
  ingredients : ['eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes']
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/* Directions:
Using the given object:

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};
add a printAccountSummary() method that returns the following account message:

Welcome!
Your balance is currently $1000 and your interest rate is 1%. */

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */


var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  // your code goes here
  printAccountSummary : function accountSummary() {
    return `Welcome!\nYour balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%`
  }
};

console.log(savingsAccount.printAccountSummary());

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/* Directions:
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1 */

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
var facebookProfile = {
  name : "",
  friends : 0,
  messages : [""], // array of strings
  postMessage : function postMessage(message) {
    facebookProfile.messages.push(message); 
  },
  deleteMessage : function deleteMessage(index) {
    facebookProfile.messages.splice(facebookProfile.messages.indexOf("message"), 1);
  },
  addFriend : function addFriend() {
    facebookProfile.friends += 1 ;
  },
  removeFriend : function removeFriend() {
    facebookProfile.friends -= 1 ; 
  } 
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var facebookProfile = {
  name: "Udacian",
  friends: 25,
  messages: ["Message 1", "Message 2", "Message 3", "Message 4"],
  postMessage: function(message){
      facebookProfile.messages.push(message);
  },
  deleteMessage: function(index){
      // In the following splice() method call,
      // - argument 1 = index from where the element has to be deleted
      // - argument 2 = count of elements to be deleted
      facebookProfile.messages.splice(index, 1);
  },
  addFriend: function(){
      facebookProfile.friends = facebookProfile.friends + 1;
      //friends += 1; // this statement is equivalent to the above
  },
  removeFriend: function(){
      if(facebookProfile.friends>0)
          facebookProfile.friends = facebookProfile.friends - 1;
  }
};



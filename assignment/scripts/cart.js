console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket and set it to an empty array.
let basket = [];
// Create a function called addItem that take an input parameter for a string item.
function addItem(item) {
  // Add the new item to the global array basket.
  basket.push(item);
  // Return true indicating the item was added.
  console.log(`${item} added to basket`);
  return true;
}

// Test addItem()
// console.log("Testing addItem():");
// addItem("Apple");
// addItem("Banana");
// console.log("Basket:", basket); // Expected output: ['Apple', 'Banana']
// console.log("");

//// COMMENT: this will get an error 
// If arrow function is used, the error will be more clearly explained 
// (you can't have addItem() before maxItem (const and let would not allow it, but if var is used, it will run. However, you'll run into hoistering.))
// To fix this, use arrow function and have additem() moved to after isFull() where maxItem was declared. 


// Create a function called listItems.
function listItems() {
  // Loop over the items in the basket array.
  for (let item of basket) {
    // Console.log each individual item on a new line.
    console.log(item);
  }
}

// // Test listItems()
// console.log('Testing listItems():');
// console.log('Basket contents:');
// listItems(); // Expected output: 'Apple', 'Banana'
// console.log('');


// Create a function called empty.
function empty() {
  // Reset the basket to an empty array.
  basket = [];
  console.log("Emptying basket");
}

// // Test empty()
// console.log('Testing empty():');
// empty();
// console.log('Basket:', basket); // Expected output: []
// console.log('');



console.log("**************** STRETCH ****************");
console.log("***** Using functions in other functions *****");

// 1. Add a global const named maxItems and set it to 5
const maxItems = 5;

// 2. Create a function called isFull(). It should:
// Return false if the basket contains less than max number of items
// Return true otherwise (equal or more than maxItems)
function isFull() {
  console.log("In isFull");
  console.log(basket);
  console.log("basket < maxItems", basket < maxItems);
  console.log("basket.length < maxItems", basket.length < maxItems);
  if (basket.length < maxItems) {
    return false;
  } else if (basket.length >= maxItems) {
    return true;
  }
}

//// COMMENT:  should be basket.length < maxItems although basket < maxItems still worked with automatic testing

// // Test isFull()
// console.log('Testing isFull():');
// addItem('Apple');
// addItem('Banana');
// console.log('Is basket full?', isFull()); // Expected output: false
// addItem('Kiwi');
// addItem('Orange');
// addItem('Mango');
// console.log('Is basket full?', isFull()); // Expected output: true
// console.log('');


// 3. Update the required addItem function to:
// Use the isFull function to prevent more than maxItems from being added to the basket.
// If there was no room and the item could not be added return false
// If an item was added to the array, return true
function addItem(item) {
    if (isFull()) {
        console.log('No more room in basket, stop adding more item!');
        return false;
    } else {
        basket.push(item);
        console.log(`Item added: '${item}'`);
        return true;
    }
}

//// COMMENT: instead use arrow function 
// let addItem = (item) => {
//     if (isFull()) {
//       console.log("No more room in basket, stop adding more item!");
//       return false;
//     } else {
//       basket.push(item);
//       console.log(`Item added: '${item}'`);
//       return true;
//     }
//   };
  
// // Test updated addITem()
// console.log('Testing updated addItem():');
// addItem('Grapes');
// addItem('Pineapple'); // This should not be added as the basket is full
// console.log('Basket:', basket);
// console.log('');

console.log("***** Using Array built-in functions *****");
// 4. Create a function called removeItem. It should:
// Take an input parameter for a string item.
// Use Array.indexOf to find the index of the first matching item in the basket.
// Use Array.splice to remove the first matching item from the basket.
// Return the item removed or null if the item was not found.
function removeItem(item) {
  let matchedItem = basket.indexOf(item);
  if (matchedItem !== -1) {
    let removedItem = basket.splice(matchedItem, 1);
    console.log(`Item removed: '${removedItem[0]}'`);
    return removedItem[0];
  } else {
    console.log(`Item not found: '${item}'`);
    return null;
  }
}

// // Test removeItem()
// console.log('Testing removeItem():');
// addItem('Orange');
// addItem('Kiwi');
// removeItem('Banana');
// removeItem('Mango'); // This should not be found in the basket
// console.log('Basket:', basket);

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== "undefined" ? basket : undefined,
    addItem: typeof addItem !== "undefined" ? addItem : undefined,
    listItems: typeof listItems !== "undefined" ? listItems : undefined,
    maxItems: typeof maxItems !== "undefined" ? maxItems : undefined,
    empty: typeof empty !== "undefined" ? empty : undefined,
    isFull: typeof isFull !== "undefined" ? isFull : undefined,
    removeItem: typeof removeItem !== "undefined" ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}

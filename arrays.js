const fruits = ["apple", "banana", "cherry"]; //length = 3
//                0         1         2       index

// Accesssing elements
console.log(fruits[0]); //apple
console.log(fruits[1]); //banana

// Update elements
fruits[2] = "blueberry";
console.log(fruits)

// Find the number of elements 
console.log(fruits.length) // 3

//## Dynamic Arrays in JS
// Javascript arrays are dynamic, meaning they can grow or shrink in size as needed

// Adding Elements
fruits.push("orange"); // to the end , push the value
console.log(fruits);
fruits.unshift("strawberry"); // to the beginning , push the value
console.log(fruits);

// Removing Elements
fruits.pop(); //Removes the elements, from the end
console.log(fruits);
fruits.shift(); //Removes the elements, from the start
console.log(fruits);


// Common Algorithms
// Traversing
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Inserting
// to add an item at specific position
fruits.splice(2,0,"kiwi")
console.log(fruits);

// Deleting
// to delete an item at specific position
fruits.splice(1,1);
console.log(fruits);

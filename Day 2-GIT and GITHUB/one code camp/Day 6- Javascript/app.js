//Array

//let fruit = "Mango";
//console.log(fruit);


let fruits = ["Mango", "Banana", "Apple", "Cherry"];
console.log(fruits);
// Access elements
console.log(fruits[2]);
console.log(fruits[0]);

//Lengthof the Index
console.log(fruits.length);

//update Elements
fruits[1] = 'Avocado'
console.log(fruits);

// Adding Elements
// Add element at the end of the Array.
fruits.push("Dewberry");
console.log(fruits);

fruits.push("Berry");
console.log(fruits);


// Deleting elements
// Delete element at the end of the array.
fruits.pop();
console.log(fruits);

// Alphabetically
fruits.sort();
console.log(fruits);

// Reverse
fruits.sort().reverse();
console.log(fruits);

// Reverse
fruits.reverse();
console.log(fruits);

// Searching
// indexOf Method
let index = fruits.indexOf('Avocado');
console.log("Index:", index);

// For Of Loop
for (fruit of fruits){
    console.log(fruit);
}














// Looping through the elements
fruits.forEach(function(fruit){
    console.log(fruit);
});

// For Loop
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
// Reverse For Loop
for (let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}
// Part 3 : Arrays

// 1. Rearranging with splice()
//     * Start with an array ["pen", "book", "eraser", "scale"].
//     * Remove "eraser" and insert "pencil" at the same place.
//     * Show the updated array.

let arrayItems = ["pen", "book", "eraser", "scale"];
let reArrangeArray = arrayItems.splice(2, 1, "pencil");

console.log('The updated array items are', arrayItems)
console.log('The item', reArrangeArray, 'is replaced with pencil');

// 2. Finding the maximum
//     * Given [10, 45, 67, 23, 89, 12], find the largest number using Math.max.apply(null, array).
let numbersArray = [10, 45, 67, 23, 89, 12];
let largeNumber = Math.max.apply(null, numbersArray);

console.log('The largest number in the array items is ', largeNumber);

// 3. String to Array & Back
//     * Take a string "apple,banana,orange".
//     * Convert it into an array using split().
//     * Then convert back into a string "apple | banana | orange" using join().

let fruitsString = "apple,banana,orange";
let fruitsArray = fruitsString.split(",");

console.log('The fruits array items are', fruitsArray);

let joinArray = fruitsArray.join(" | ");

console.log('The fruits string is ', joinArray);

// 3. Create an array of 5 colors. Show the 3rd color using its index.

let colors = ["Pink", "White", "Blue", "Purple", "Yellow"];

console.log('The third color in the array is', colors[2]);

// 4. Make an array of numbers [10, 20, 30, 40, 50]. Find the position of 30 using

let numArray = [10, 20, 30, 40, 50];
let positionNumber = numArray.indexOf(30);

console.log('The position number of 30 in the array', numArray, ' is ', positionNumber);

// 5. Create an array of names ["Amit", "Rahul", "Sneha", "Priya"].
//     * Add one more name at the end using push().
//     * Remove the first name using shift().
//     * Show the final array in the console.

let namesArray = ["Amit", "Rahul", "Sneha", "Priya"];

namesArray.push("John", "Andrew");

namesArray.shift();

console.log('The final names are', namesArray);

// 6. Make an array of numbers [100, 200, 300].
//     * Use concat() to add another array [400, 500].
//     * Show the new array in the console.

let firstArray = [100, 200, 300];
let secondArray = [400, 500];
let concatArray = firstArray.concat(secondArray);

console.log('The concatinated array items are', concatArray);

// 7. Create an array ["HTML", "CSS", "JavaScript"]. Use reverse() to reverse the order. 
// Show it in an alert.

let scriptArray = ["HTML", "CSS", "JavaScript"];

alert('The reverse array of ' + scriptArray + ' is ' + scriptArray.reverse());

// 8. Create an array of numbers [2, 4, 6, 8, 10]. 
// Use every() to check if all numbers are even.

let evenArray = [2, 4, 6, 8, 10];

if (evenArray.every(numbers => numbers % 2 === 0)) {

    console.log("Numbers are even");

}

else {

    console.log("Numbers are odd");

}

// 9. Create an array of ages [12, 18, 20, 25]. 
// Use some() to check if there’s at least one person under 18.

let ageArray = [12, 18, 20, 25];

if (ageArray.some(age => age < 18)) {

    console.log("Atleast one person in the array is under 18 years")

}

else {

    console.log("All are above 18 years")

}
// Part 1: Variables, alert, prompt, confirm


// 1. Declare a variable name and assign your name to it. Show it using alert().

let varName = 'Jayam';
alert(varName);

// 2. Ask the user for their age using prompt(). 
// Store it in a variable and display it back using alert().

let age = prompt('Enter your age');
alert('The user age is '+ age + ' years');

// 3. Use confirm() to ask the user: "Do you like JavaScript?". 
// Store the result in a variable and display it in the console.

let jsQuestion = confirm('Do you like JavaScript')
if (jsQuestion == true)
 console.log('The user likes javascript');
 else
 console.log('The user does not like javascript')
// 4. Write a script where you:
//     * Use prompt() to ask the user for two numbers.
//     * Store them in variables.
//     * Perform Arithmetic operations (Add Substract Divide Multiply and Modulo) and show the result in an alert.

let number1 = prompt('number1', 'Enter number1');
let number2 = prompt('number2', 'Enter number2')

// Addition
addResult = parseInt(number1) + parseInt(number2);
alert('Addition value is ' + addResult);

//Subtraction
subResult = parseInt(number1) - parseInt(number2);
alert('Subtraction value is ' + subResult);

//Division
divResult = parseInt(number1) / parseInt(number2);
alert('Division value is ' + divResult);

//Modulo
moduloResult = parseInt(number1) % parseInt(number2);
alert('Modulo value is ' + moduloResult);



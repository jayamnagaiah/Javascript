// Console
// console.log("Hello from javascript")

// 13.08.2025
// Window - window command in console

// Alert - doesn't return any value
// alert('Alert message')

// Confirm - confirmation from the user, returns value
// console.log(confirm('Do you agree?'))

// Prompt with default value - returns value/ hold values to variable

// prompt('Enter name','test')


// prompt and log in console

// console.log(prompt('Enter name'))

// Comment - command K+C
// Uncomment - command K+U

// Variables - var, let, const

// var, let - let is efficient towards security, used in modern scripting 
// const - constant, doesn't change
// ; - Terminator

// var varA = 10;
// console.log(varA);

// let varX = 20;
// console.log(varX);

// const CONSA = 100;
// console.log(CONSA);

//14.08.2025

// DataTypes

// let name = 'jayam'; // String
// let id = 1; // Number
// let isStudent = false; //Boolean
// let isEmployed = undefined; // undefined value and type
// let sName = null; //Object

// console.log(typeof name);

// console.log(typeof id);

// console.log(typeof isStudent);

// console.log(typeof isEmployed);

// console.log(typeof sName);

// json - javascript object notation // json viewer - https://jsonviewer.stack.hu/
// let p = {key, value}
// let person = {
//     id: '1',
//     name: 'Testname',
//     college: 'ABC',
//     address: {
//         firstline: 'Streetname',
//         secondline: 'Area'
//     },
//     phone: 8888
// };

// console.log(person)

// console.log('Type of person', typeof person);

// let today = new Date();

// console.log(today);
// console.log('Type of today: ' + typeof today);

// Confirm Box
// let selectedValue = confirm('Do you want to exit?');
// console.log(selectedValue)

// Conditional Statements

// if, if else, if else if else if -- ladder, switch

// if(selectedValue) {
//     console.log('You have clicked OK');

// }
// console.log(('After if'));

// Else if
// if (selectedValue) {
//     console.log('You have clicked OK');
// }
// else {
//     console.log('You have clicked cancel');
// }

// 18.08.2025

// == checks the value
// === checks the value and data type
// let a = 5;

// if (a === '5') {
//     console.log('a is 5');
// } else {
//     console.log('a is not 5');

// }

// let marks = 55;

// if (marks >= 90) {
//     console.log('Grade:A');
// }
// else if (marks >= 80) {
//     console.log('Grade is B');
// }
// else if (marks >= 60) {
//     console.log('Grade is C')
// }
// else {
//     console.log('Grade is D')
// }


// Switch

// let day = 3
// switch(day){
//     case 1:
//         console.log ('Monday')
//         break;
//     case 2:
//         console.log ('Tues')
//         break;
//     case 3:
//         console.log ('Wednes')
//         break;
//     default:
//         console.log ('Week end')
// }

// Nested if

// let user = 'user1'
// let pwd = 'pwd1'

// let isAuthorized = false;

// if(pwd ==='pwd1'){

//     if(isAuthorized){
//     console.log('Welcome user', user);
//     }
//     else {
//     console.log('You are not authorized')
//     }
// }
//     else {
//         console.log('Incorrect Password')
//     }

// Ternary Operator

// let value = (condition) ? true : false;
// let a = 6;

// (a === 5 ) ? console.log('a is 5') : (a === 6 ) ? console.log('a is 6') : console.log('a is not 5 and 6');

// AND and OR operator

// let user = 'user1';
// let pwd = 'pwd';

// let isAuthorized = true;

// if(pwd === 'pwd' && isAuthorized){
//     console.log('Welcome(AND)', user)
// }

// if(pwd ==='pwd1'|| isAuthorized){
//     console.log('Welcome(OR)', user)
// }

// //Arrays

// let arr = ['1','2','Jayam',true];
// console.log(arr[2]);
// console.log(arr);

// Replace existing array value
// arr[2] = 'new value';
// console.log(arr[2]);

// // Array length
// let size = arr.length;
// console.log(size);

// // Array index
// let index = arr.indexOf('2');
// console.log(index);

// Assign array values with index

// let arr1 = [];

// arr1[0] = 'Apple';
// arr1[1] = 'Orange';

// console.log(arr1);

// let arr2 = new Array(1,2,3,4,5);
// console.log(arr2);

// Stack - First In Last Out

// Queues - First In First Out

// arr.push(100); // push to last index
// console.log(arr);

// arr.pop(); // pop out from last index
// console.log(arr);

// // Unshift - add element as the first index

// arr.unshift(100); 
// console.log(arr);

// //shift - remove the element from first index
// arr.shift();
// console.log(arr);


// splice - remove the elements given as splice values from any index
// let fruits = ['Banana','Apple','Orange','Grapes']

// fruits.splice(1,2);

// console.log(fruits);

// let data = [
//     {name:'name',id:1,address:'location'},
//     {name:'name2',id:1,address:'location2'},
//     {name:'name3',id:1,address:'location3'}
// ]

// console.log(data);


// Loops 

// 1. While - checks conditions first and

// let i = 0;

// while(i<5){
//     console.log('Value of i is', i);
//     i++;
// }

// 2. Do while - checks conditions later

// let i = 0;

// do {
//     console.log('Value of i is', i);
//     i++;
// }while(i<5);

// 3. for - initialize, condition, inc/dec in same line

// debugger;
// for(let i = 5; i >= 0; i--){
//     console.log('Value of i is', i)
// }

// 4. for in loop - for (let key in person){}

// let person = { name:'Jayam', city: 'Auckland', country: 'New Zealand'

// for (let key in person){
//     console.log('Key is', key + ' value is ', person[key]);
// }


// 5. for of loop - for(let index in Arrayindex)

let fruits = ['Apple', 'Banana', 'Orange', 'Lemon'];

for(let fruit in fruits){
    console.log(fruit, fruits[fruit]);
}


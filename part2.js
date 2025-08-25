// Part 2: Conditional Statements
// 1. Ask the user for a number using prompt(). 
// Check if it’s even or odd, and show the result in an alert.

// let numCheck = prompt('Enter number to verify even or odd')
// let moduloResult = parseInt(numCheck) % 2;

// if (moduloResult == 0)
//     alert('The number is even');

// else
//     alert('The number is odd');

// 2. Write a script that asks the user for their marks (out of 100).
//     * If marks ≥ 90 → Show "Grade A"
//     * If marks ≥ 75 → Show "Grade B"
//     * If marks ≥ 50 → Show "Grade C"
//     * Otherwise → Show "Fail"

// let marksGradecheck = prompt('Enter the marks to check Grade');
// if(marksGradecheck>=90)
//     alert('Grade A')
// else if(marksGradecheck>=75)
//     alert('Grade B')
// else if(marksGradecheck>=50)
//     alert('Grade C')
// else
// alert('Fail');

// 3. Use prompt() to ask the user for a day number (1–7). 
// Use a switch statement to print the day name (e.g., 1 → Monday).

// let dayNumber = prompt('Enter the day number to display the day')
// console.log(dayNumber)

// switch(parseInt(dayNumber)) {
//     case 1:
//     alert ('Sunday')
//     break;
//     case 2:
//     console.log ('Monday')
//     break;
//     case 3:
//     console.log('Tuesday')
//     break;
//     case 4:
//     console.log('Wednesday')
//     break;
//     case 5:
//     console.log('Thursday')
//     break;
//     case 6:
//     console.log('Friday')
//     break;
//     case 7:
//     console.log('Saturday')
// }

// 4. Use a ternary operator to ask the user for their age.
//     * If age ≥ 18 → "You are an adult"
//     * Else → "You are a minor"

// let ageCheck = prompt('Enter the age');

// (ageCheck>=18) ? console.log('You are an adult') : console.log('You are a minor');

// 5. Ask the user to enter a password.
//     * If the password matches "12345", show "Login Successful".
//     * Otherwise show "Wrong Password".

// let pwdCheck = prompt('Enter the password');

// (pwdCheck == 12345) ? console.log('Login Successful') : console.log('Wrong Password');

// 6. Ask the user for a number.
//     * If the number is positive
//         * Check if it’s also even or odd.
//     * Else if the number is negative
//         * Show "Negative number".
//     * Else show "Number is zero".

// numCheck = prompt('Enter the number');
// moduloResult = parseInt(numCheck) % 2;

// if(parseInt(numCheck)>=1){
//     if(moduloResult == 0) {
//         alert('The number is positive and even number');
//     }
//         else if(moduloResult != 0) {

//             alert('The number is positive and odd number');
//         }
//     }
//         else if(parseInt(numCheck)<0){

//             alert('The number is negative');
//     }
//     else {
//         alert('The number is Zero');

//     }


// 7. Ask the user for their age and whether they have a driving license (yes/no).
// * If age ≥ 18
//     * If license is "yes" → Show "You can drive"
//     * Else → Show "You are eligible by age but don’t have a license"
//     * Else → Show "You are underage"

// let ageCheck = prompt('Enter your age')
// let drivingLicense = prompt('Do you have driving license?', 'yes or no')
// if(ageCheck>=18) {
//     if(drivingLicense == 'yes'){
//         console.log('You can drive');
//     }
//         else
//         console.log('You are eligible by age but don’t have a license');
//     }
//     else
//     console.log('You are underage');

// 8. Ask the user to enter username and 
// password.
//     * If username = "admin"
//         * If password = "1234" → Show "Welcome Admin"
//         * Else → Show "Wrong password"
//     * Else → Show "Invalid username"

unCheck = prompt('Enter the username')
pwdCheck = prompt('Enter the password');

if(unCheck === 'admin') {
    if(pwdCheck == '1234') {
        alert('Welcome Admin');
    }
    else {
    alert('Wrong Password');
    }
}
else {
     alert('Invalid username');
}

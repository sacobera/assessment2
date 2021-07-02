// Directions
// Create a new file called password.js. Write a program that does the following:

// Welcome the user to the password validator tool

// Prompt the user for a password to validate

// Check if the user’s password meets the following constraint:

// At least 10 characters long

// If the user’s password meets the constraint, show a success message to the user

// If the user’s password fails the constraint, show a failure message to the user


//CODE HERE

alert("Welcome!")

let password = prompt("Please enter your password."){
    if (password >= 10 ){
        console.log('Log in successful')
    } else {
        console.log('Log in failed')
    }
}
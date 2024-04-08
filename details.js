const prompt = require("prompt-sync")({ sigint: true });

let first_name = prompt("Enter First Name: ");
let last_name = prompt("Enter Last Name: ");
let date_of_birth = prompt("Enter Date of Birth (YYYY-MM-DD): ");
let email = prompt("Enter Email Address: ");

// Convert date
date_of_birth = new Date(date_of_birth);

// Masking function

function maskName(name) {
    return name.substring(0, 2) + '*'.repeat(name.length - 2);
}

function maskDate(date) {
    let dateObj = new Date(date);
    let year = dateObj.getFullYear().toString().slice(0, 2) + '**';
    let month = (dateObj.getMonth() + 1).toString().padStart(2, '0').charAt(0) + '*';
    let day = dateObj.getDate().toString().padStart(2, '0').charAt(0) + '*';
    return year + '-0' + month + '-1' + day;
}

// Create an object to store user information
let userObject = {
    first_name: maskName(first_name),
    last_name: maskName(last_name),
    date_of_birth: maskDate(date_of_birth),
    email: maskName(email)
};

console.log("User Information:");
console.log(userObject);
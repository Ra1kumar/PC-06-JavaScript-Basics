// User inputs (you can modify these values)
let userName = "Rahul Sharma";
let userAge = "22";          // intentionally a string
let userProfession = "Software Developer";

// Convert age string to number
let age = parseInt(userAge);

// Calculate Year of Birth
let currentYear = new Date().getFullYear();
let yob = currentYear - age;

// Create email from name → remove spaces + lowercase
let email = userName.replace(/\s+/g, "").toLowerCase() + "@gmail.com";

// Publish values to page (in BLOCK LETTERS)
document.getElementById("name").innerHTML = userName.toUpperCase();
document.getElementById("age").innerHTML = userAge.toUpperCase();
document.getElementById("yob").innerHTML = yob.toString().toUpperCase();
document.getElementById("email").innerHTML = email.toUpperCase();
document.getElementById("profession").innerHTML = userProfession.toUpperCase();

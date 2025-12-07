// Read first name and last name
let firstName = document.getElementById("first").innerHTML;
let lastName = document.getElementById("last").innerHTML;

// Merge them
let fullName = firstName + " " + lastName;

// Publish merged name to h1 tag
document.getElementById("first").innerHTML = fullName;

// Log output to console
console.log(fullName);

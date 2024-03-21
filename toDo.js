// Enter his/her name
var userName = prompt("Please enter your name:");

// Gender
var userGender = prompt("Please select your gender:");

// Age
var userAge = parseInt(prompt("Please enter your age:"));

// Verify age
if (userAge <= 0) {
    alert("Please enter a valid age.");
}

// Skip the welcoming message
var skipMessage = confirm("Do you want to skip the welcoming message?");

// Check the user's gender and display a welcoming message accordingly
if (userGender.toLowerCase() === "male") {
    if (skipMessage) {
        alert("Welcome, " + userName + "!");
    } else {
        alert("Welcome, Mr. " + userName + "!");
    }
} else if (userGender.toLowerCase() === "female") {
    if (skipMessage) {
        alert("Welcome, " + userName + "!");
    } else {
        alert("Welcome, Ms. " + userName + "!");
    }
} else {
    alert("Welcome, " + userName + "!");
}

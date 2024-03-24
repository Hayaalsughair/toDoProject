// Enter his/her name
var userName = prompt("Please enter your name:");

// Gender
var userGender = prompt("Please select your gender:");

// Age
var userAge = parseInt(prompt("Please enter your age:"));

// Yes/No Question 
/*
var enrolled = prompt("Are you enrolled in .NET course? (Yes/No)").toLowerCase();

var isEnrolled;

    switch (enrolled) {
        case "yes":
            isEnrolled = true;
            break;
        case "no":
            isEnrolled = false;
            break;
        default:
            alert("Invalid response. Please answer Yes or No.");

            break;
    }*/

// Function to insure input
function yesNoQuestion(question) {
    while (true) {
        var response = prompt(question + " (Yes/No)").toLowerCase();
        if (response === "yes" || response === "no") {
            return response;
        }
        alert("Invalid input. Please answer Yes or No.");
    }
}

// Yes/No Question
var isEnrolled = yesNoQuestion("Are you enrolled in .NET course ?");


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

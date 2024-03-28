"use strict";

// Get user name
var userName = prompt("What's your name?");

// Get user gender
var userGender = prompt("What's your gender? (Female/Male) ");

// Get user age (with basic validation)
var userAge;
while (true) {
  var userInput = prompt("How old are you? (Numbers only please)");
  userAge = parseInt(userInput);

  // Basic check for number
  if (isNaN(userAge)) {
    alert("Please enter a number for your age.");
  } else if (userAge <= 0) {
    alert("Age must be a positive number. Please try again.");
  } else {

    break;
  }
}


// Function to ask Yes/No questions 
function askYesNo(question) {
    while (true) {
      const answer = prompt(question + " (Yes/No)");
      // That handle Upper case & Lowe case 
      if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "no") {
        return answer; 
      } else if (answer === "") {
        alert("Please answer Yes or No."); 
        // Handle empty input
      } else {
        alert("Invalid answer. Please answer Yes or No.");
      }
    }
  }
  

// some yes/no qusetion about .net course
var isEnrolledDotNet = askYesNo("Are you enrolled in a .NET course?");
var hasExperience = askYesNo("Do you have any programming experience?");
var prefersOnline = askYesNo("Do you prefer learning online?");

// stor answers in an array 
var allAnswers = [];
allAnswers.push("Name: " + userName);
allAnswers.push("Gender: " + userGender);
allAnswers.push("Age: " + userAge);
allAnswers.push(".NET Course: " + isEnrolledDotNet);
allAnswers.push("Programming Experience: " + hasExperience);
allAnswers.push("Prefers Online Learning: " + prefersOnline);

// print answers 
console.log("Here are the answers:");
for (var i = 0; i < allAnswers.length; i++) {
  console.log(allAnswers[i]);
}

// skip welcome message
var skipWelcome = confirm("Do you want to skip the welcome message?");

// put Ms || Mr after the name  
if (!skipWelcome) {
  var title = "Hey ";
  if (userGender.toLowerCase() === "male") {
    title = "Welcome, Mr. ";
  } else if (userGender.toLowerCase() === "female") {
    title = "Welcome, Ms. ";
  }
  alert(title + userName + "!");
}

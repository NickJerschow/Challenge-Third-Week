// Assignment Code
var generateBtn = document.querySelector("#generate");

// Various Arrays for characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Globally declared variables
var passwordLength = " ";
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialCharacters;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Needed to define generatePassword function
function generatePassword() {
  // Prompt for criteria
    // password length 8-128
    passwordLength = (prompt("How many characters would you like your password to contain? Choose between 9 and 128"));
    console.log("Password length " + passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8 and 128 characters");
    
  } else {
    // confirm method allows for a prompt that creates a boolean value
    confirmLowerCase = confirm("Do you want to include lower scase letters?");  
  } 


  
    
    // include lowercase, uppercase, numbers, special characters
  // validate the input. 
  // Genrate password based on criteria
  
  // Display password on page  
  
    return password;
  }
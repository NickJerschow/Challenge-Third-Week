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
var confirmNumbers;
var userSelections;

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
    passwordLength = (prompt("How many characters would you like your password to contain? Choose between 8 and 128."));
    console.log("Password length " + passwordLength);

    // If the user selects a value outside of the range
    if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8 and 128 characters");
    
     // include lowercase, uppercase, numbers, special characters?
  } else { 
    // confirm method allows for a prompt that creates a boolean value
    confirmLowerCase = confirm("Do you want to include lower case letters?");
    console.log("Lower case " + confirmLowerCase); 
    confirmUpperCase = confirm("Do you want to include upper case letters?");
    console.log("Upper case " + confirmUpperCase); 
    confirmSpecialCharacters = confirm("Do you want to include special characters?");
    console.log("Special characters " + confirmSpecialCharacters); 
    confirmNumbers = confirm("Do you want to include numbers?");
    console.log("Numbers " + confirmNumbers);
  
  }; 

  // Combining choices based on the user's selection
    if (confirmLowerCase && confirmUpperCase && confirmSpecialCharacters && confirmNumbers) {
      userSelections = lowercase.concat(uppercase, specialCharacters, numbers);
      console.log(userSelections);
    }

// When only selcting 3 inputs
    else if (confirmLowerCase && confirmUpperCase && confirmSpecialCharacters) {
        userSelections = lowercase.concat(uppercase, specialCharacters);
        console.log(userSelections);
    }

    else if (confirmLowerCase && confirmUpperCase && confirmNumbers) {
        userSelections = lowercase.concat(uppercase, numbers);
        console.log(userSelections);
    }

    else if (confirmLowerCase && confirmSpecialCharacters && confirmNumbers) {
      userSelections = lowercase.concat(specialCharacters, numbers);
      console.log(userSelections);
     }

     else if (confirmUpperCase && confirmSpecialCharacters && confirmNumbers) {
      userSelections = uppercase.concat(specialCharacters, numbers);
      console.log(userSelections);
    }

  // When selecting 2 inputs
     else if (confirmLowerCase && confirmUpperCase) {
    userSelections = lowercase.concat(uppercase);
    console.log(userSelections);
    }

    else if (confirmLowerCase && confirmSpecialCharacters) {
    userSelections = lowercase.concat(specialCharacters);
    console.log(userSelections);
    }

    else if (confirmLowerCase && confirmNumbers) {
    userSelections = lowercase.concat(numbers);
    console.log(userSelections);
    }

    else if (confirmUpperCase && confirmSpecialCharacters) {
      userSelections = uppercase.concat(specialCharacters);
      console.log(userSelections);
    }

    else if (confirmUpperCase && confirmNumbers) {
      userSelections = specialCharacters.concat(numbers);
      console.log(userSelections);
    }

    else if (confirmSpecialCharacters && confirmNumbers) {
      userSelections = specialCharacters.concat(numbers);
      console.log(userSelections);
    }

  // Single Selections
    else if (confirmLowerCase) {
    userSelections = lowercase;
    console.log(userSelections);
    }  

    else if (confirmUpperCase) {
      userSelections = uppercase;
      console.log(userSelections);
    } 
    
    else if (confirmSpecialCharacters) {
      userSelections = specialCharacters;
      console.log(userSelections);
    }  

    else if (confirmNumbers) {
      userSelections = numbers;
      console.log(userSelections);
    }  

  // Generating random password based on user's selections
  // Variable created for the for loop 
    var passwordEmpty = []

    for (var i = 0; i < passwordLength; i++) {
      var randomGeneration = userSelections[Math.floor(Math.random() * passwordLength)];
      //Using push command to add the new random elements to the end of the empty array
      passwordEmpty.push(randomGeneration); 
      console.log(randomGeneration);
    }
    
    //Join method allows the array to become a string
    var password = passwordEmpty.join("")
    console.log("The password is " + password);
    
  // Returning the password 
    return password;
  }
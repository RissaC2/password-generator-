// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options

function getPasswordOptions() {
  var passwordlength = prompt("How long would you like your password to be");
  var passwordOptions = [];
  var finalPassword= [];
  if (passwordlength > 128 || passwordlength < 8) {
    alert("Password must meet length criteria");
    return;
  }
  var getPasswordlowercase = confirm("Do you want a lowercase character?");
  var getPassworduppercase = confirm("Do you want a Uppercase character?");
  var getPasswordnumeric = confirm("Do you want a numeric character?");
  var getPasswordspecial = confirm(
    "Do you want a special character character?"
  );

  if (getPasswordlowercase === true) {
    passwordOptions = passwordOptions.concat(lowerCasedCharacters);
  }

  if (getPassworduppercase === true) {
    passwordOptions = passwordOptions.concat(upperCasedCharacters);
  }

  if (getPasswordnumeric === true) {
    passwordOptions = passwordOptions.concat(numericCharacters);
  }
  if (getPasswordspecial === true) {
    passwordOptions = passwordOptions.concat(specialCharacters);
  }
  console.log(passwordOptions);
  for (let index = 0; index < passwordlength; index++) {
    var random = Math.floor (Math.random()*passwordOptions.length)
    finalPassword.push (passwordOptions[random])
    
  }
  console.log(finalPassword)
  return finalPassword.join("");
}
// Function for getting a random element from an array
// function getRandom(arr) {
//   for (var i = 0; i < arr.length; i++) console.log(arr);
//   var getRandom =
//     specialCharacters.numericCharacters.upperCasedCharacters
//       .lowerCasedCharacters[Math.floor(Math.random() * 62)];
//   getPasswordOptions += getRandom;
// }

// Function to generate password with user input

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

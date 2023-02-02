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

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

function getPasswordOptions() {
  var passwordlength = prompt("How long would you like your password to be");
  var passwordOptions = [];
  var finalPassword = [];
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
    var random = Math.floor(Math.random() * passwordOptions.length);
    finalPassword.push(passwordOptions[random]);
  }
  console.log(finalPassword);
  return finalPassword.join("");
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = getPasswordOptions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

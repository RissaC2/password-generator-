// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

function getPasswordOptions (){
  var getPasswordlowercase = confirm("Do you want a lowercase character?");
  var getPassworduppercase = confirm("Do you want a Uppercase character?");
  var getPasswordnumeric = confirm("Do you want a numeric character?");
  var getPasswordspecial = confirm("Do you want a special character character?");
  var getPasswordOptions = 0;
  if(getPasswordlowercase) getPasswordOptions++;
  if(getPassworduppercase) getPasswordOptions++;
  if(getPasswordnumeric) getPasswordOptions++;
  if(getPasswordspecial) getPasswordOptions++;
}

// Function for getting a random element from an array
function getRandom(arr) 
// for (var i = 0; i < arr.length; i++) {


// }



// upperCasedCharacters.lowerCasedCharacters.numericCharacters.specialCharacters.getRandom =(math.random);
// }

// Function to generate password with user input
function generatePassword (


for (var j = 0; i < getPasswordOptions; j++) 
var password = generatePassword(getPasswordlowercase,getPassworduppercase,getPasswordnumeric,getPasswordspecial)
var passwordchoice = generatePassword[Math.floor(Math.random() * getPasswordOptions.length)];
)

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//  var uppercasedCharacters=0
//  var specialCharacters=0
//  var numericCharacters=0
//  var lowerCasedCharacters=0


// function getPasswordOptions (){
//   lowerCasedCharacters = confirm("Do you want a lowercase character?");
//   upperCasedCharacters = confirm("Do you want a Uppercase character?");
//    numericCharacters = confirm("Do you want a numeric character?");
//    specialCharacters = confirm("Do you want a special character character?");
//   // var getPasswordOptions = getPasswordlowercase + getPasswordnumeric + getPasswordnumeric + getPasswordspecial
//   }
//   var getPasswordOptions = 0;
//   if(getPasswordlowercase) getPasswordOptions++;
//   if(getPassworduppercase) getPasswordOptions++;
//   if(getPasswordnumeric) getPasswordOptions++;
//   if(getPasswordspecial) getPasswordOptions++;
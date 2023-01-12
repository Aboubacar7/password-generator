// Assignment Code
var generateBtn = document.querySelector("#generate");

// defineing our global variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"
var specialChar = "!@#$%^&*()_+="

// creating generator password
function generatePassword() {
  // Defining password and characters variables
  var password = ''
  var characters = ''

  // Identify password content
  var pwLength = prompt("How many characters long between 8 and 128 would you like your password to be?")

  // Password exigence
  while (pwLength < 8 || pwLength > 128) {
    alert("password must be between 8 and 128")
    pwLength = prompt("How many characters long between 8 and 128 would you like your password to be?")
  }

  // Confirming user choices
  var wantsUp = confirm("Do you want uppercase letters?")
  if (wantsUp) {
    characters += upperCase
  }

  var wantsLower = confirm("Do you want lowercase letters?")
  if (wantsLower) {
    characters += lowerCase
  }

  var wantsNum = confirm("Do you want numbers?")
  if (wantsNum) {
    characters += numbers
  }

  var wantsSpec = confirm("Do you want special characters?")
  if (wantsSpec) {
    characters += specialChar
  }

  // User must choose character to generate password
  while (!wantsUp && !wantsLower && !wantsNum && !wantsSpec) {
    alert("You must choose at least one type of character")
    wantsUp = confirm("Do you want uppercase letters?")
    if (wantsUp) {
      characters += upperCase
      console.log(characters)
    }

    wantsLower = confirm("Do you want lowercase letters?")
    if (wantsLower) {
      characters += lowerCase
      console.log(characters)
    }

    wantsNum = confirm("Do you want numbers?")
    if (wantsNum) {
      characters += numbers
    }

    wantsSpec = confirm("Do you want special characters?")
    if (wantsSpec) {
      characters += specialChar
    }
  }
  // Choosing random characters to generate password
  for (var i = 0; i < pwLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length))

  }
 
 
  // paasword generated when user applies all requirement
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

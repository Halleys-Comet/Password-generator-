// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // ask how long they want their password to be
  window.prompt('How long would you like your password to be? Must choose between 8 to 128 characters.')
  window.prompt('Would you like to include lowercase letters?')
  function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  };
  window.prompt('Would you like to include uppercase letters?')
  function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  window.prompt('Would you like to include numbers?')

  function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }

  window.prompt('Would you like to include special characters?')

  function getRandomCharacter () {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
  }

  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

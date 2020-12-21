// Assignment code here

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var special = ['@', '#', '$', '%', '<', '^', '<']
  function input () {
    var length =  window.prompt('How long would you like your password to be? Must choose between 8 to 128 characters.');
    console.log(length)

    var lower = window.confirm('Would you like to include lowercase letters?');
    console.log(lower)

    var upper =  window.confirm('Would you like to include uppercase letters?');
    console.log(upper)

    var num =  window.confirm('Would you like to include numbers?');
    console.log(num)

    var special = window.confirm('Would you like to include special characters?');
    console.log(special)

    var inputresults = {
      length: length,
      lower: lower,
      upper: upper,
      num: num,
      special: special
    }
    return inputresults 
  }
  


  function generatePassword() {
    var iresults = input()
    var acceptedCharacters = []
    var chosenCharacters = []
    var results = []
    //Checked if user wants lower case letters
    if (iresults.lower) {
      // if the user wants lower case letters we added it to accepted character array
    acceptedCharacters = acceptedCharacters.concat(lowerCaseLetters)
    // checked what was in the accpeted character array
    console.log(acceptedCharacters)
    }

    // check if user wants upper case 
    if (iresults.upper) {
      acceptedCharacters = acceptedCharacters.concat(upperCaseLetters)
      chosenCharacters.push(randomCharacter(upperCaseLetters))
      console.log(chosenCharacters)
      console.log(acceptedCharacters)
    }

    if (iresults.num) {
      acceptedCharacters = acceptedCharacters.concat(numbers)
      chosenCharacters.push(randomCharacter(numbers))
      console.log(acceptedCharacters)
      console.log(chosenCharacters)
    }

    if (iresults.special) {
      acceptedCharacters = acceptedCharacters.concat(special)
      chosenCharacters.push(randomCharacter(special))
      console.log(acceptedCharacters) 
    }

    for (var i =0; i < iresults.length; i++) {
      acceptedCharacters = randomCharacter(acceptedCharacters);
      console.log(acceptedCharacters);
      results.push (acceptedCharacters);
    };

    for (var i = 0; i < chosenCharacters.length; i++) {     
      results[i] = chosenCharacters[i]
    }

    console.log(results)
    // convert array to a string
    

    return results
  

  }
  function randomCharacter(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length)
    var randomEl = arr[randomIndex]
    return randomEl
  }
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

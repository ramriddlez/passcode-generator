// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let passwordLength = prompt("please enter a NUMBER between 8-128");
  if(8 <= passwordLength && 128 >= passwordLength) {
    let password_Object = passwordCriteria();
    let long_Password = password_Object[0];
    let short_Password = password_Object[1];
    let result_Password = shuffleString(passwordLength,long_Password,short_Password);
    return result_Password;
  } else {
    alert("Please Make Sure your number is within the appropriate range of characters");
    }
  }

function passwordCriteria() {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let specialChar ="~!@#$%^&*()_+{}|<>:;/";

  let password = "";
  let password_1 ="";
  let count = 0;


confirm ("please select at least ONE criteria. If not, password will default to lowercase characters");

let upperCase_Confirm = confirm("Do you want UpperCase Letters in your password?");
if(upperCase_Confirm == true) {
  password += upperCase;
  //math.random() to pick character
  password_1 += upperCase[Math.floor(Math.random()*upperCase.length)];
  count++;
}

let lowercase_Confirm = confirm("Do you want LowerCase Letters in your password?");
if(lowercase_Confirm == true) {
  password += lowerCase;
  password_1 += lowerCase[Math.floor(Math.random()*lowerCase.length)];
  count++;
}

let number_Confirm = confirm("Do you want Numbers in your password?");
if(number_Confirm == true) {
  password += number;
  password_1 += number[Math.floor(Math.random()*number.length)];
  count++;
}
let specialChar_Confirm = confirm("Do you want special characters Letters in your password?");
if(specialChar_Confirm == true) {
  password += specialChar;
  password_1 += specialChar[Math.floor(Math.random()*specialChar.length)];
  count++;
}

console.log(password);
if(count > 0) {
  return [password, password_1];
} else {
  password = lowerCase;
  password_1 = "a";
  alert("Please choose atleast one criteria");
  passwordCriteria();
  }
} 


function shuffleString(length, long, short) {
  let result ="";

  for(let i=0; i<(length-short.length); i++) {
    result += long[Math.floor(Math.random()*long.length)];
  }
  result+=short;

  let shuffled = result.split('').sort(function(){return 0.5-Math.random()}).join('');
  return shuffled;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);














































// Need a function to set password parameters according to guest's needs. 
function passwordCriteria() {
  var characters = prompt("What is the length of your password? Minimum 8 and maximum 128 characters.")
  var passwordOptions = ""
  var lowerCase = confirm("Would you like lower case letters in your password?")
  var upperCase = confirm("Would you like upper case letters in your password?");
  var numbers = confirm("Would you like numbers in your password?");
  var symbols = confirm("Would you like symbols in your password? Special characters include: !@#$%^&*()_+");
  var password = ""
  // console.log(characters);
  // console.log(lowerCase);
  // console.log(upperCase);
  // console.log(numbers);
  // console.log(symbols);
  console.log(parseInt (characters))
  // Validity check on variables
  if(isNaN (parseInt(characters))) {
    alert("Please input a number between 8 and 128.")
      return
  }
  if(parseInt(characters) < 8 || parseInt(characters) > 128) {
    alert("Sorry, your password is either too short or too long. Please keep your password between 8-128 characters in length.");
      return
  }
  if(lowerCase === true) {
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    passwordOptions += lowerCaseLetters
    }
  if(upperCase === true) {
     var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     passwordOptions += upperCaseLetters
     }
  if(numbers === true) {
    var numbersTrue = "1234567890"
    passwordOptions += numbersTrue
    }
  if(symbols === true) {
    var symbolsTrue = '"~!@#$%^&*()_+{}|"'
    passwordOptions += symbolsTrue
  }

// passwordOptions holds the user's password criteria.
console.log(passwordOptions)

// Randomly choose characters from passwordOptions
for (var i = 0; i <= characters; i++) {
  var randomNumber = Math.floor(Math.random() * passwordOptions.length);
  password += passwordOptions.substring(randomNumber, randomNumber +1);
 }
 // password pulls from passwordOptions to create the user's password.
       document.getElementById("password").value = password;
       console.log(password)
}
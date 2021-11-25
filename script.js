// Assignment Code
var generateBtn = document.querySelector("#generate");
//alphabet arrays
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const number = "0123456789";
const symbol = "!@#$%^&*";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  let length = parseInt(
    prompt("Choose a password length! (Note: Password can not be less than 8 or more than 128 characters)")
  );
  if (length < 8 || length > 128 || typeof length == undefined) {
    alert("Password can not be less than 8 or more than 128 characters");
    return;
  }
  let lowerIn = confirm("Click ok if you want to include lower case letters");
  let upperIn = confirm("Click ok if you want to include upper case letters");
  let numberIn = confirm("Click ok if you want to include numbers");
  let symbolIn = confirm("Click ok if you want to include special characters");
  if (lowerIn === false && upperIn === false && numberIn === false && symbolIn === false) {
    alert("You need at least 1 kind of character to make a password");
    return;
  }
  let chars = "";
  if (lowerIn) {
    chars = chars.concat(alphaLower)
  }
  if (upperIn) {
    chars = chars.concat(alphaUpper)
  }
  if (numberIn) {
    chars = chars.concat(number)
  }
  if (symbolIn) {
    chars = chars.concat(symbol)
  }
  chars = chars.split("");
  let pw = ""
  console.log(chars)
  for (let i = 0; i<length&&i<128; i++) {
    const index = Math.floor(Math.random() * chars.length);
    let char = chars[index];
    console.log (char)
    pw = pw.concat(char);
  }
  return pw;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

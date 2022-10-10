const uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 const lowercaseChar = ["a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z"]
 const numbers = [ "0", "1", "2", "3", "4", "5", "6","7", "8", "9"]
 const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let password = document.getElementById('password');
let passwordLength = document.getElementById('length-el');
let uppercaseCheck = document.getElementById('uppercase')
let lowercaseCheck = document.getElementById('lowercase')
let numbersCheck = document.getElementById('numbers')
let symbolsCheck = document.getElementById('symbols')
let generateBtn = document.getElementById('generateBtn-el')
let copyBtn = document.getElementById('copy-btn')

let newPassword = []


function getUppercase() {
    return uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)]
}

console.log(getUppercase())

function getLowercase() {
    return lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)]
}

console.log(getLowercase())

function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

console.log(getNumbers())

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(getSymbols())

function generatePassword() {
    const length = passwordLength.value
    password = ""
}

function copy() {
  
    // Select the text field
    password.select();
    password.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(password.value);
  
    // Alert the copied text
    alert("Copied the text!");
}

copyBtn.addEventListener("click", copy)


  
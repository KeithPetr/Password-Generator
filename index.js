const uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 const lowercaseChar = ["a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z"]
 const numbers = [ "0", "1", "2", "3", "4", "5", "6","7", "8", "9"]
 const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let passwordEl = document.getElementById('password-el');
let passwordLength = document.getElementById('length-el');
let uppercaseCheck = document.getElementById('uppercase')
let lowercaseCheck = document.getElementById('lowercase')
let numbersCheck = document.getElementById('numbers')
let symbolsCheck = document.getElementById('symbols')
let generateBtn = document.getElementById('generateBtn-el')
let copyBtn = document.getElementById('copy-btn')

let newPassword = []

// ----- Get individual characters -----

function getUppercase() {
    return uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)]
}


function getLowercase() {
    return lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)]
}


function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}


function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}


// ----- Generate Password -----

function generatePassword() {
    const length = passwordLength.value
    let password = ""
    for (let i = 0; i < length; i++) {
        const x = generateX();
        password += x
    }
    passwordEl.textContent = password
}

function generateX() {
    const xs = [];
    if (uppercaseCheck.checked) {
        xs.push(getUppercase())
    }
    if (lowercaseCheck.checked) {
        xs.push(getLowercase())
    }
    if (numbersCheck.checked) {
        xs.push(getNumbers())
    }
    if (symbolsCheck.checked) {
        xs.push(getSymbols())
    }
    if (xs.length === 0) return "";
    return xs[Math.floor(Math.random() * xs.length)]
}

generateBtn.addEventListener("click", generatePassword)

// ----- Copy Password -----

function copy() {
  
    // Select the text field
    passwordEl.select();
    passwordEl.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(passwordEl.value);
  
    // Alert the copied text
    alert("Copied the text!");
}

copyBtn.addEventListener("click", copy)


  
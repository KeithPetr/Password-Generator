const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6",
 "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
 "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordOne = document.getElementById('password-1');
let passwordTwo = document.getElementById('password-2');

function generate() {

    passwordOne.textContent = ""
    passwordTwo.textContent = ""

    for (let i = 0; i < 16; i++) {
        let randPassOne = Math.floor(Math.random() * 91)
        let randPassTwo = Math.floor(Math.random() * 91)
        passwordOne.textContent += characters[randPassOne]
        passwordTwo.textContent += characters[randPassTwo]
    }
}

function copyOne() {
  
    // Select the text field
    passwordOne.select();
    passwordOne.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(passwordOne.value);
  
    // Alert the copied text
    alert("Copied the text!");
}

function copyTwo() {
  
    // Select the text field
    passwordTwo.select();
    passwordTwo.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(passwordTwo.value);
  
    // Alert the copied text
    alert("Copied the text!");
}


  
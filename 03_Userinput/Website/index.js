// How to take user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = Html textbox


// username = window.prompt(`What's your username?`)

// console.log(`your name ${username}`);

let username
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myPara").textContent = `Hello ${username}`
}
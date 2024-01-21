const body=document.querySelector('body');
const button=document.querySelector('button');
const colors=['violet','red','black','blue','pink','yellow','skyblue','orange','purple','green',];

body.style.backgroundColor='violet';

button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})
var userName = prompt("hey ! whats your name");
var answerElement = document.getElementById("Hello ! " + userName +"Welcome to Color Kart");
// answerElement.innerText =userName;
// ("Hello ! " + userName +"Welcome to Color Kart")
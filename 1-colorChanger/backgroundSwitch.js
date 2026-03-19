/* 
logic one 


const webBody = document.querySelector("body");

const webButtons = document.getElementsByClassName("button");
let newWebButtons = Array.from(webButtons);

newWebButtons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    console.log(e.target);

    webBody.style.backgroundColor = e.target.id;
  });
});

*/


/*
logic two 


const webBody = document.querySelector("body")
console.log(webBody)
const webButton = document.querySelectorAll(".button")
console.log(webButton)

webButton.forEach(function (singleButton){
    console.log(singleButton)
    singleButton.addEventListener('click',function(clickbutton){
        console.log(clickbutton.target)
        webBody.style.backgroundColor = clickbutton.target.id;
    })
})

*/


const webBody = document.querySelector("body");
const webButton = document.querySelectorAll(".button");

webButton.forEach(function (singleButton) {
  singleButton.addEventListener('click', function (clickbutton) {
    const color = clickbutton.target.id;

    switch (color) {
      case "red":
        webBody.style.backgroundColor = color;
        break;

      case "green":
        webBody.style.backgroundColor = color;
        break;

      case "blue":
        webBody.style.backgroundColor = color;
        break;

      case "yellow":
        webBody.style.backgroundColor = color;
        break;

      default:
        console.log("Unknown color");
    }
  });
});
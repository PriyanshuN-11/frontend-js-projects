// const webBody = document.querySelector("body")
// const webButton = document.getElementsByClassName("button")
// const arrWebButton = Array.from(webButton)

// arrWebButton.forEach(function (buttonChange){
//     buttonChange.addEventListener('click', function (buttonEvent){
//      webBody.style.backgroundColor = buttonEvent.target.id 
//     })
// })

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
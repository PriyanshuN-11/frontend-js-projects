const form = document.querySelector("form")

form.addEventListener("submit", function(fromEvent){
  fromEvent.preventDefault();

let height = document.querySelector("#height").value;
let weight = document.querySelector("#weight").value;
 let result = document.querySelector("#results")

  if(height < 0 || height === "" || isNaN(height) ){
    result.innerHTML = "please enter the vaild height"
  }
  else if (weight < 0 || weight === "" || isNaN(weight) ){
    result.innerHTML = "please enter the vaild weight"
  }
  else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    result.innerHTML = `<span>${bmi}</span>` 
    
    let bmiGuide = document.querySelector("#weight-guide");
    if (bmi < 18.6) {
      bmiGuide.innerHTML = `<h3>Under Weight</h3>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      bmiGuide.innerHTML = `<h3>Normal Range</h3>`;
    } else {
      bmiGuide.innerHTML = `<h3>Overweight</h3>`;
    }
  }

})
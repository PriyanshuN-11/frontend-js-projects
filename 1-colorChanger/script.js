const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach( function(color){
  color.addEventListener("click", function(event){
    let id = event.target.id

    if(id === "grey"){
      body.style.backgroundColor = id
    }
    else if ( id === "white"){
      body.style.backgroundColor = id
    }
    else if (id === "blue"){
      body.style.backgroundColor = id 
    }
    else {
      body.style.backgroundColor = "yellow"
    }
    
  })
})
var numberOfPanels = document.querySelectorAll(".panel").length;

function switchActive (){
  for(var i = 0; i < numberOfPanels; i++ ){
    document.querySelectorAll(".panel")[i].classList.remove("active");
  }
  
 
    this.classList.add("active");
  
  // var otherPanels = document.querySelectorAll()[]
}

for(var i = 0; i < numberOfPanels; i++ ){
  document.querySelectorAll(".panel")[i].addEventListener("click", switchActive);
}
var numberOfPanels = document.querySelectorAll(".panel").length;

function switchActive (){
  for(var i = 0; i < numberOfPanels; i++ ){
    document.querySelectorAll(".panel")[i].classList.remove("active");
  }
  
  if(this.classList.contains("active")){
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
  // var otherPanels = document.querySelectorAll()[]
}

for(var i = 0; i < numberOfPanels; i++ ){
  document.querySelectorAll(".panel")[i].addEventListener("click", switchActive);
}
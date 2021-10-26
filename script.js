function switchActive (){
  if(this.classList.contains("active")){
    this.classList.remove("active");

  } else {
    this.classList.add("active");
  }
  // var otherPanels = document.querySelectorAll()[]
}
var numberOfPanels = document.querySelectorAll(".panel").length;
for(var i = 0; i < numberOfPanels; i++ ){
  document.querySelectorAll(".panel")[i].addEventListener("click", switchActive);
}
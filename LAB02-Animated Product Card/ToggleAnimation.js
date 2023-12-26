let circle = document.querySelectorAll(".color-option");

circle.addEventListener("click", (e)=>{
  let target = e.target;
  if(target.classList.contains("circle")){
    circle.querySelectorAll(".active").classList.remove("active");
    target.classList.add("active");
    document.querySelectorAll(".main-images .active").classList.remove("active");
    document.querySelectorAll(`.main-images .${target.id}`).classList.add("active");
  }
});
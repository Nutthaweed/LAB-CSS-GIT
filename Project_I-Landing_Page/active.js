let act = document.querySelector("nav ul li");
   act.addEventListener("click", (e)=>{
     let target = e.target;
     if(target.classList.contains(".header nav ul li a")){
       act.querySelector(".active").classList.remove("active");
       target.classList.add("active");
       document.querySelector(".header nav ul li a .active").classList.remove("active");
       document.querySelector(`.header nav ul li a  .${target.id}`).classList.add("active");
     }
   });


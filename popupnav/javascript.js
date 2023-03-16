let start = document.querySelector("#start");
let left = document.querySelector("#left");
let middle = document.querySelector("#middle");
let right = document.querySelector("#right");

start.addEventListener("click", function(){
    left.classList.toggle("left");
    middle.classList.toggle("middle");
    right.classList.toggle("right");
});
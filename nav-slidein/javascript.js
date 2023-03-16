let navOpen = document.querySelector("#nav-open");
let nav = document.querySelector("nav");

navOpen.addEventListener("click", function(e){
   e.preventDefault();
    nav.classList.toggle("active");

});
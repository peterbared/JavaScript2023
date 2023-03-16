let H1link = document.querySelector("h1");
let myMain = document.querySelector("main");

H1link.addEventListener("click", function(){
    myMain.classList.toggle("expanded");
});


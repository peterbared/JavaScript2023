let s1ref = document.querySelector("#s1");
let s2ref = document.querySelector("#s2");
let s3ref = document.querySelector("#s3");

let b1ref = document.querySelector("#b1");
let b2ref = document.querySelector("#b2");
let b3ref = document.querySelector("#b3");

//s1ref.classList.add("hide");
s2ref.classList.add("hide");
s3ref.classList.add("hide");

b1ref.addEventListener("click",function(){
    s1ref.classList.remove("hide");
    s2ref.classList.add("hide");
    s3ref.classList.add("hide");
});
b2ref.addEventListener("click",function(){
    s1ref.classList.add("hide");
    s2ref.classList.remove("hide");
    s3ref.classList.add("hide");
});
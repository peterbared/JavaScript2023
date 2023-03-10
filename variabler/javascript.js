let meddelande = "Hej Peter!";

//skapa kontakt med H1-taggen
let myH1ref = document.querySelector("h1");

//ändra innehållet i taggen
myH1ref.innerHTML = meddelande;

//ändra stilarna för taggen
myH1ref.classList.add("test");
myH1ref.style.fontSize = "55px";
myH1ref.style.color = "red";


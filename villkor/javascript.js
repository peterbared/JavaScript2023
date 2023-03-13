const hour = new Date().getHours();
let myH1 = document.querySelector("h1");


if(hour == 6){
    myH1.innerHTML = "Du kan sova lite till";
}else if(hour == 7){
    myH1.innerHTML = "God morgon";
}else if(hour == 8){
    myH1.innerHTML = "Panik!";
}else{
    myH1.innerHTML = "För sent!";
}

//Här kommer en kommentar från VSC
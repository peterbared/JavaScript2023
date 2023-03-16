const hour = new Date().getHours();
let myH1 = document.querySelector("h1");
let myBody = document.querySelector("body");

if(hour == 6){
    pageSetting("Du kan sova lite till", "darkgrey", "black");
}else if(hour == 7){
    pageSetting("God morgon", "white", "#c55e36");
}else if(hour == 8){
    pageSetting("Panik", "white", "red");
}else{
    pageSetting("För sent", "black", "white");
}

function pageSetting(text,textcolor,pagecolor){
    try {
        myH1.innerHTML = text;
        myH1.style.color = textcolor;
        myBody.style.backgroundColor = pagecolor;
    } catch {
        alert("Någonting gick fel");
    }
    
}
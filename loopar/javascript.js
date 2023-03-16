let main = document.querySelector("main");
let cards = "";
for (let i = 1; i < 26; i++) {
    cards += `<div><img src="Samples/LandscapeImage${i}.jpg"></div>`;
}
console.log(cards);
main.innerHTML = cards;
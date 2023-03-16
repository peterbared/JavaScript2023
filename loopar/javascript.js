let main = document.querySelector("main");
let cards = "";
for (let i = 1; i < 26; i++) {
    cards += `<img src="Samples/LandscapeImage${i}.jpg">`;
}
console.log(cards);
main.innerHTML = cards;
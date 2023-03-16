fetchData("json/modell1.json");

const button1 = document.getElementById('one');
const button2 = document.getElementById('two');
const button3 = document.getElementById('three');

button1.addEventListener('click', () => {
  fetchData("json/modell1.json");
});
button2.addEventListener('click', () => {
  fetchData("json/modell2.json");
});
button3.addEventListener('click', () => {
  fetchData("json/modell3.json");
});

function fetchData(jsonFile){
  fetch(jsonFile)
  .then(response => response.json())
  .then(data => {
    addContent(data.modell, data.img, data.content);
  });
}

function addContent(modell, img, content){
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>${modell}</h1>
    <img src="img/${img}">
    <p>Email: ${content}</p>
  `;

}

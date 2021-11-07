//Date 

let date = new Date();

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${dayOfMonth}.${month}.${year}`;
}   

let result = formatDate(date);

let div = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');

div.className = "header";
div2.className = "mainH";
div3.className = "day";

div2.innerHTML = "Astronomy Stories of the Day";
div3.innerHTML = `${result}`;

document.body.prepend(div);
div.prepend(div3);
div.prepend(div2); 


//Запрашиваем информацию с сервера и отображаем

let inf = (async function(){
    let responce = await fetch('https://api.nasa.gov/planetary/apod?api_key=ZzjtXXTasXRueiaKhld2TYYo0tKxUJRxcebWXMFA');
    let resultNew = await responce.json();
    let planetInfo = document.querySelector('.about_planet');
    planetInfo.innerHTML = `${resultNew.explanation}`;
})();



//Через сутки запрашиваем новую, прежнюю убираем, новую ставим

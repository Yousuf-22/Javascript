const url = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=bf1991cf48d251592ac78b5b337c9f9c&units=metric";

const searchbtn = document.getElementById('btn');
let wheathericon = document.querySelector('.wheathericon');

async function getdata(city) {
    
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf1991cf48d251592ac78b5b337c9f9c&units=metric`;

    const response = await fetch(api);
    const responseJson = await response.json();

    console.log(responseJson);

    document.querySelector('.temp').innerHTML = Math.round(responseJson.main.temp) + `°C`;
    document.querySelector('.cityname').innerHTML = responseJson.name;
    document.querySelector('.humidity').innerHTML = responseJson.main.humidity + `%`;
    document.querySelector('.wind').innerHTML = responseJson.wind.speed + ` km/h`;
    
    if(responseJson.weather[0].main == 'Clouds') {
        wheathericon.src = 'images/clouds.png';
    } else if(responseJson.weather[0].main == "Clear") {
        wheathericon.src = 'images/clear.png';
    } else if(responseJson.weather[0].main == "Rain") {
        wheathericon.src = 'images/rain.png';
    } else if(responseJson.weather[0].main == "Drizzle") {
        wheathericon.src = 'images/drizzle.png';
    } else if(responseJson.weather[0].main == "Mist") {
        wheathericon.src = 'images/mist.png';
    }
}


searchbtn.addEventListener('click', function() {
    getdata(document.getElementById('inputfield').value)
})
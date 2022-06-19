const API_KEY = "f3cdd812db950851d411b493cb9f6380";
const getCity = document.querySelector(".city");
const getWeather = document.querySelector(".weather");


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        const name = data.name;
        const weather = data.weather[0].main;
        getCity.innerText = name;
        getWeather.innerText = weather;
    }));
}

function onGeoError(){
    console.log("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
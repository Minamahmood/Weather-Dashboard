const btnWeather = document.getElementById("btnWeather");
const txtCity = document.getElementById("txtCity");
const resultOut = document.getElementById("result");
const name = document.getElementById("name");
const weather = document.getElementById("weather");
const temp = document.getElementById("temp");

btnWeather.onclick = function(event) {
    event.preventDefault();
    const city = txtCity.value;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=39907d575f349b1b0380ef04160f3574`;
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            name.innerHTML = json.name;
            temp.innerHTML = json.main.temp;
            weather.innerHTML = json.weather[0].main;
        });
};
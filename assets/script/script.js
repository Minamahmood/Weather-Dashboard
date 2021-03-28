var curDate = moment().format("MM/DD/YYYY");
console.log(curDate);
//SELECT ELEMENT
const btnWeather = document.getElementById("btnWeather");
const txtCity = document.getElementById("txtCity");
const resultOut = document.getElementById("result");
let pervSearch = localStorage.getItem("txtCity");
pervSearch = pervSearch ? JSON.parse(pervSearch) : [];
console.log(pervSearch);
const weather = document.getElementById("weather");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherIcon = document.querySelector("#weather-icon");
const dateCont = document.querySelector(".notification");

dateCont.innerHTML = curDate;

btnWeather.onclick = function(event) {
    event.preventDefault();
    localStorage.clear();

    document.getElementById("five-day-forecast-container").style.display =
        "block";
    const city = txtCity.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=39907d575f349b1b0380ef04160f3574`;
    const forcastUrl =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=39907d575f349b1b0380ef04160f3574";
    save();
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            const name = document.getElementById("name");
            name.innerHTML = json.name;
            console.log(json.weather[0].icon);

            weatherIcon.setAttribute(
                "src",
                "http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png"
            );
            temp.innerHTML =
                Math.round(json.main.temp * (9 / 5) - 459.67).toFixed(0) + "&deg;F";
            weather.innerHTML = weather.innerHTML = json.weather[0].main;
            humidity.innerHTML = json.main.humidity + "%  humidity";
            windSpeed.innerHTML = json.wind.speed + "MPH windSpeed";
        });

    fetch(forcastUrl)
        .then((response) => response.json())
        .then((forecast) => {
            console.log(forecast);
            var day = 1;
            for (let i = 0; i < forecast.list.length; i++) {
                // console.log(forecast.list[i].dt_txt.split(" ")[1]);
                if (forecast.list[i].dt_txt.split(" ")[1] === "12:00:00") {
                    console.log(forecast.list[i]);
                    document.getElementById(
                        "day-" + day + "-h5"
                    ).textContent = forecast.list[i].dt_txt.split(" ")[0];
                    document
                        .querySelector("#weather-icon" + day)
                        .setAttribute(
                            "src",
                            "http://openweathermap.org/img/wn/" +
                            forecast.list[i].weather[0].icon +
                            "@2x.png"
                        ),
                        (document.getElementById("temp-" + day).textContent =
                            (forecast.list[i].main.temp * (9 / 5) - 459.67).toFixed(0) + "F");

                    document.getElementById("humidity-" + day).textContent =
                        forecast.list[i].main.humidity + "%  humidity";
                    // document.getElementById("weather-" + day).textContent =
                    //     forecast.list[i].main.weather;
                    day++;
                }
            }
        });

    var storedItem = localStorage.getItem("storedItem");

    function save() {
        var Item = document.getElementById("txtCity").value;
        localStorage.setItem("storedItem", Item);
        document.getElementById("savedText").textHTML = Item + "SAVED";
    }

    function git() {
        localStorage.getItem("storedItem");
        document.getElementById("openedText").innerHTML = storedItem + "OPENED";
    }
};
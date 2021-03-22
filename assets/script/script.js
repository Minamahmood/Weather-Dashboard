var curDate = moment().format("MM/DD/YYYY");
console.log(curDate);
//SELECT ELEMENT
const btnWeather = document.getElementById("btnWeather");
const txtCity = document.getElementById("txtCity");
const resultOut = document.getElementById("result");

const weather = document.getElementById("weather");
const temp = document.getElementById("temp");
const dateCont = document.querySelector(".notification");

dateCont.innerHTML = curDate;

btnWeather.onclick = function(event) {
    event.preventDefault();
    document.getElementById("five-day-forecast-container").style.display =
        "block";
    const city = txtCity.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=39907d575f349b1b0380ef04160f3574`;
    const forcastUrl =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=39907d575f349b1b0380ef04160f3574";

    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            const name = document.getElementById("name");
            name.innerHTML = json.name;
            temp.innerHTML =
                Math.round(json.main.temp * (9 / 5) - 459.67).toFixed(0) + "F";
            weather.innerHTML = weather.innerHTML = json.weather[0].main;
        });

    fetch(forcastUrl)
        .then((response) => response.json())
        .then((forecast) => {
            var day = 1;
            for (let i = 0; i < forecast.list.length; i++) {
                // console.log(forecast.list[i].dt_txt.split(" ")[1]);
                if (forecast.list[i].dt_txt.split(" ")[1] === "12:00:00") {
                    console.log(forecast.list[i]);
                    document.getElementById(
                        "day-" + day + "-h5"
                    ).textContent = forecast.list[i].dt_txt.split(" ")[0];

                    document.getElementById("temp-" + day).textContent =
                        (forecast.list[i].main.temp * (9 / 5) - 459.67).toFixed(0) + "F";
                    document.getElementById("humidity-" + day).textContent =
                        forecast.list[i].main.humidity;
                    day++;
                }
            }
        });

    //     var storedItem = localStorage.getItem("storedItem");

    //     function save() {
    //         var Item = document.getElementById("txtCity").value;
    //         localStorage.setItem("storedItem", Item);
    //         document.getElementById("savedText").textHTML = Item + "SAVED";
    //     }

    //     function git() {
    //         localStorage.getElementById("storedItem");
    //         document.getElementById("openedText").innerHTML = storedItem + "opened";
    //     }
};
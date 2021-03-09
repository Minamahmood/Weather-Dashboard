var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener("click", function() {
            fetch(
                "api.openweathermap.org/data/2.5/forecast?q= " +
                inputValue.value +
                "{city name}&appid=39907d575f349b1b0380ef04160f3574"
            );
            .then((response) => response.json())
                .then((data) => {
                        var nameValue = data['name'];
                        var tempValue = data['name']['temp'];
                        var descValue = data['weather']['0']['description'];

                        name.innerHTML = nameValue;
                        temp.innerHTML = tempValue;
                        desc.innerHTML = descValue;
                    }



                    .catch((err) => alert("wrong city name!")
                    });
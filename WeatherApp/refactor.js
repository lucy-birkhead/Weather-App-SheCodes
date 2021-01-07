// MODEL
    alert('hw');
    let city = "Corrales";
    let apiKey = "19e635cfd49a09267430a421d97c1f42";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//VIEW
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let cityElement = document.querySelector("h1");

    function displayTemperature(response) {

    celsiusTemperature = response.data.main.temp;

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

//CONTROLER
let input = document.querySelector("#enterCity");
let form = document.querySelector("form");
    form.addEventListener("submit", alert());

function search(event) {
            event.preventDefault();

            h1.innerHTML = input.value;
            city = input.value;
             
        let apiKey = "19e635cfd49a09267430a421d97c1f42";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayTemperature).then(input.value = "");
        }




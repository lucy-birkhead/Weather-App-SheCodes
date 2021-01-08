function search(event) {
            event.preventDefault();
            
            let input = document.querySelector("#enterCity");
            let h1 = document.querySelector("h1");
            h1.innerHTML = input.value;
            let city = input.value;
             
        let apiKey = "19e635cfd49a09267430a421d97c1f42";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeather).then(input.value = "");
        }
function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let iconElement = document.querySelector("#icon");
    let iconCode = response.data.weather[0].icon;
    
    celsiusTemperature = response.data.main.temp;

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    iconElement.setAttribute(
        "src", 
        `http://openweathermap.org/img/wn/${iconCode}@2x.png`
        );
   
}

    let apiKey = "19e635cfd49a09267430a421d97c1f42";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
    let form = document.querySelector("form");
    form.addEventListener("submit", search);
    
    
    let now = new Date();
    let p = document.querySelector("p");
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
    let hours= now.getHours();
    if (hours < 10) {
            hours = `0${hours}`;
    }
    let minutes= now.getMinutes();
    if (minutes < 10) {
            minutes = `0${minutes}`;
    }

    p.innerHTML = `${day}, ${hours}:${minutes}`;    

    function displayWeather(response) {
        let temperature = Math.round(response.data.main.temp);
        let h3 = document.querySelector("h3");
        h3.innerHTML = temperature;
        let temp = document.querySelector("#temperature");
        temp.innerHTML = temperature;

    }

    function displayFahrenheitTemperature(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature");
        let fahrenheitTemperature = (temperatureElement.innerHTML * 9) / 5 + 32;
        let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
        temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
    }

    function displayCelsiusTemperature(event) {
            event.preventDefault();
            let temperatureElement = document.querySelector("#temperature");
            temperatureElement.innerHTML = Math.round(celsiusTemperature);
        }

let celsiusTemperature = null;

   let fahrenheitLink = document.querySelector("#fahrenheit-link");
   fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

   let celsiusLink = document.querySelector("#celsius-link");
   celsiusLink.addEventListener("click", displayCelsiusTemperature);


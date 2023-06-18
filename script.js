const apiKey = "13b9e736b93273814b7686226b577f05";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// bejme lidhjen e kerkimit ne buton me qytetin duke krijuar nje variabel search dhe nje buton
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&APPID=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else {

    var data = await response.json();

   

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "cloudy.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png";
    }
    else if (data.weather[0].main == "Sunny") {
        weatherIcon.src = "sunny.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "snow.png";
    }
    else if (data.weather[0].main == "Showers") {
        weatherIcon.src = "showers.png";
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "4724091.png";
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "drizzle.png";
    }
    else if (data.weather[0].main == 'Fog') {
        weatherIcon.src = "fog.png";
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = "mist.png";
    }

    document.querySelector(".weather").style.display="block";  // per te shfaqur ne momentin e kerkimit
    document.querySelector(".error").style.display="none";
}
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


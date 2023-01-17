document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});



let weather = {
    apiKey: "157adfe4a239b55737c9ac5e809d7463",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { sunrise, sunset } = data.sys;


        const mapUrl = "https://maps.google.com/maps?q=${name}&hl=es&z=14&amp;output=embed";
        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "Km/h";
        document.querySelector(".sunrise").innerText = "sunrise is : " + new Date(sunrise * 1000).toLocaleTimeString();
        document.querySelector(".sunset").innerText = "sunset is : " + new Date(sunset * 1000).toLocaleTimeString();
        document.querySelector('.map').innerHTML = `<iframe src="${mapUrl}"></iframe>`;


        //document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920×1080/?q=80&w=1080 " + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

weather.fetchWeather("copenhagen");
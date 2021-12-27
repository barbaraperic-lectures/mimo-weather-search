const apiKey = "df49e55ca909653a425f7f678af2e81b";
const temperature = document.querySelector(".temperature");
const form = document.getElementById("form");
const input = document.getElementById("keyword");
const weatherIcon = document.getElementById("weather-icon");
const cityName = document.querySelector(".city");

const searchWeather = (city) => {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			const city = data.name;
			const temp = data.main.temp;
			const iconcode = data.weather[0].icon;
			const description = data.weather[0].description;
			weatherIcon.src = `http://openweathermap.org/img/w/${iconcode}.png`;
			cityName.innerText = `Weather in ${city}`;
			temperature.innerText = `Temperature is ${temp}ºC, ${description}`;
		});
};

searchWeather("London");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	searchWeather(input.value);
});

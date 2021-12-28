import { initMoment } from "./helper/init_moment";

const temperature = document.querySelector(".temperature");
const weatherIcon = document.getElementById("weather-icon");
const cityName = document.querySelector(".city");
const time = document.querySelector(".time");

const fetchWeatherData = (city) => {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`
	)
		.then((response) => response.json())
		.then((data) => insertWeatherData(data));
};

const insertWeatherData = (data) => {
	console.log(data);
	const city = data.name;
	const temp = data.main.temp;
	const iconcode = data.weather[0].icon;
	const description = data.weather[0].description;
	const timeText = initMoment(data.timezone);
	weatherIcon.src = `http://openweathermap.org/img/w/${iconcode}.png`;
	cityName.innerText = `Weather in ${city}`;
	temperature.innerText = `Temperature is ${temp}ºC, ${description}`;
	time.innerText = timeText;
};

export { fetchWeatherData };

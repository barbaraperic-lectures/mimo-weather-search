const temperature = document.querySelector(".temperature");
const weatherIcon = document.getElementById("weather-icon");
const cityName = document.querySelector(".city");

const fetchWeatherData = (city) => {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`
	)
		.then((response) => response.json())
		.then((data) => insertWeatherData(data));
};

const insertWeatherData = (data) => {
	const city = data.name;
	const temp = data.main.temp;
	const iconcode = data.weather[0].icon;
	const description = data.weather[0].description;
	weatherIcon.src = `http://openweathermap.org/img/w/${iconcode}.png`;
	cityName.innerText = `Weather in ${city}`;
	temperature.innerText = `Temperature is ${temp}ºC, ${description}`;
};

export { fetchWeatherData };

import { fetchWeatherData } from "./weather";

const form = document.getElementById("form");
const input = document.getElementById("keyword");

fetchWeatherData("London");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	fetchWeatherData(input.value);
});

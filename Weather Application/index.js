const form = document.querySelector("form");
const cityInput = document.querySelector("#city");
const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;
  const apiKey = "7c0aaed4cbdf8f6266fb5271a8d892d8";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Description: ${data.weather[0].description}`;
  } catch (error) {
    alert("Could not fetch weather data. Please try again later.");
  }
});

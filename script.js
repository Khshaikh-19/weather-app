async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "198c5319397bc6447fd7e4447af90b0b"; // Replace with your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherInfo").innerHTML = `<p>❌ City not found!</p>`;
      return;
    }

    document.getElementById("weatherInfo").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>${data.weather[0].main} - ${data.weather[0].description}</p>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("weatherInfo").innerHTML = `<p>Something went wrong.</p>`;
    console.error("Fetch error:", error);
  }
}

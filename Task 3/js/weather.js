document.getElementById('weatherForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim();
    const apiKey = 'b1f88e839c95956ff33615af77bf419c'; // Replace with your OpenWeatherMap API key
    const weatherResult = document.getElementById('weatherResult');
    const errorMessage = document.getElementById('errorMessage');
    const loadingSpinner = document.getElementById('loadingSpinner');
  
    if (!city) {
      showError('Please enter a city name.');
      return;
    }
  
    try {
      // Show loading spinner
      loadingSpinner.style.display = 'block';
      weatherResult.innerHTML = '';
      errorMessage.style.display = 'none';
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
  
      if (data.cod === 200) {
        displayWeather(data);
      } else {
        showError('City not found. Please try again.');
      }
    } catch (error) {
      showError('Failed to fetch weather data. Check your connection.');
    } finally {
      loadingSpinner.style.display = 'none';
    }
  });
  
  function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  
    weatherResult.innerHTML = `
      <div class="weather-header">
        <h2 class="city-name">${data.name}, ${data.sys.country}</h2>
        <img src="${iconUrl}" alt="Weather Icon" class="weather-icon">
      </div>
      <div class="temperature">${Math.round(data.main.temp)}°C</div>
      <div class="weather-info">${data.weather[0].description}</div>
      <div class="weather-details">
        <p class="weather-info">Feels like: ${Math.round(data.main.feels_like)}°C</p>
        <p class="weather-info">Humidity: ${data.main.humidity}%</p>
        <p class="weather-info">Wind: ${data.wind.speed} m/s</p>
      </div>
    `;
  }
  
  function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  }
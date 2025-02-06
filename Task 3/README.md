# Task 3: Basic API Integration

This task involves fetching and displaying weather data from the OpenWeatherMap API. The application allows users to search for a city and view real-time weather information.

## Features
- **Search Functionality**: Users can enter a city name to fetch weather data.
- **Dynamic Weather Display**: Displays the following information:
  - City name and country
  - Current temperature
  - Weather description (e.g., "Clear sky")
  - Feels-like temperature
  - Humidity
  - Wind speed
- **Loading State**: Shows a loading spinner while fetching data.
- **Error Handling**: Displays user-friendly error messages if the city is not found or if there’s a connection issue.
- **Modern UI**: Clean and responsive design with a gradient background.


## 📂 File Structure  
Task 3/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── weather.js
└── assets/
    └── (optional: icons or images)

## Files
- `index.html`: The main HTML file containing the weather dashboard structure.
- `css/styles.css`: Stylesheet for the dashboard layout and design.
- `js/weather.js`: JavaScript file containing the API integration and logic.

## How to Run
1. Get an API key from [OpenWeatherMap](https://openweathermap.org/api).
2. Replace `YOUR_API_KEY` in the `weather.js` file with your actual API key.
3. Open the `index.html` file in a web browser.
4. Enter a city name (e.g., "London") and click the search button to view weather data.

## Example
- Search for: `London`
- Output:
  - City: London, GB
  - Temperature: 15°C
  - Weather: Clear sky
  - Feels like: 14°C
  - Humidity: 60%
  - Wind: 3.5 m/s

---

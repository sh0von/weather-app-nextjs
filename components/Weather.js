
import { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [location, setLocation] = useState({});
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
   
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });

     
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=e365571f77c64461e8aaba91f772c647`
        )
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    });
  }, []);

  return (
    <div className={`container d-flex justify-content-center align-items-center vh-100 `}>
      {weatherData.main && (
        <div className="card p-4">
          <h2 className="card-title">
            Weather in {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p className="card-text">
            <strong>Temperature:</strong> {weatherData.main.temp}°C
          </p>
          <p className="card-text">
            <strong>Feels Like:</strong> {weatherData.main.feels_like}°C
          </p>
          <p className="card-text">
            <strong>Humidity:</strong> {weatherData.main.humidity}%
          </p>
          <p className="card-text">
            <strong>Pressure:</strong> {weatherData.main.pressure} hPa
          </p>
          <p className="card-text">
            <strong>Weather:</strong> {weatherData.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;

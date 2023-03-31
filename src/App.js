/* Need front-end for dashboard
 * Database for storing temperature data
 * implement react-router for history 
 * 
 *
 *
 *
 *
 *
 * */
import { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  // STATE
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isWeather, setIsWeather] = useState(
    localStorage.getItem("isWeatherData") === "true"
  );
  const [coords, setCoords] = useState(false);
  const [weatherObject, setWeatherObject] = useState(
    JSON.parse(localStorage.getItem("weatherObject"))
  );

  useEffect(() => {
    localStorage.setItem("isWeatherData", isWeather);
  }, [isWeather]);
  useEffect(() => {
    localStorage.setItem("weatherObject", JSON.stringify(weatherObject));
  }, [weatherObject]);

  //If geolocation present, use geolocation api to get position to pass to openWeather API
  if ("geolocation" in navigator) {
    if (coords === false) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setCoords(true);
      });
    }
  }

  function setLocalStorage(weatherDataFromFetch) {
    // store weather object in browser for persistence
    setWeatherObject(weatherDataFromFetch);
    setIsWeather(true);
  };
  function getWeatherFromApi(latitude, longitude) {
    if (coords === true && isWeather === false) {
      fetch("http://localhost:3001/weather", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          latitude: latitude,
          longitude: longitude,
        }),
      })
        .then((response) => response.json())
        .then((weatherData) => {
          setLocalStorage(weatherData);
        })
        .catch((err) => console.log(err));
    } else {
      setIsWeather(true);
    }
  };
  return (
    <div>
      {coords === true && isWeather === false ? (
        <button
          onClick={() => {
            getWeatherFromApi(latitude, longitude);
          }}
          text="Get local weather"
        >
          Get Weather
        </button>
      ) : (
        <p></p>
      )}
      {isWeather === true ? (
        <div className="weather-widget">
          <p>Conditions: {weatherObject.weather[0].description}</p>
          <p>
            Temperature: {Math.trunc(weatherObject.main.temp - 273.15)}
            <sup>o</sup> C
          </p>
          <p>Wind: {weatherObject.wind.speed} km/h</p>
          <p>
            Feels like: {Math.trunc(weatherObject.main.feels_like - 273.15)}
            <sup>o</sup> C
          </p>
          <p>Location: {weatherObject.name}</p>
        </div>
      ) : coords === false ? (
        <p>Location not provided</p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default App;

import { useState, useEffect } from "react";
import "./weatherComponent.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import AirIcon from "@mui/icons-material/Air";

const WeatherComponent = () => {
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
  }
  function getWeatherFromApi(latitude, longitude, refresh) {
    if ((coords === true && isWeather === false) || refresh === true) {
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
  }

  return (
    <div>
      {coords === true && isWeather === false ? (
        <Button
          onClick={() => {
            getWeatherFromApi(latitude, longitude, false);
          }}
          variant="contained"
          sx={{ margin: 2 }}
        >
          Get Weather
        </Button>
      ) : (
        <p></p>
      )}
      {isWeather === true ? (
        <Card sx={{ minWidth: 275, margin: 2 }}>
          <CardContent>
            <Typography variant="body2">
              {weatherObject.weather[0].description === "clear sky" ? (
                <Brightness5Icon />
              ) : null}
            </Typography>
            <Typography variant="h3" component="div">
              {Math.trunc(weatherObject.main.temp - 273.15)}
              <sup>o</sup>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Feels like: {Math.trunc(weatherObject.main.feels_like - 273.15)}
            </Typography>
            <Typography variant="body2">
              <AirIcon /> {weatherObject.wind.speed} km/h
            </Typography>
            <Typography color="text.secondary">{weatherObject.name}</Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => getWeatherFromApi(latitude, longitude, true)}
            >
              Refresh
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default WeatherComponent;

import { useState, useEffect } from "react";
import styles from "./Weather.module.css";

export default function Weather() {
  const [weather, setWeather] = useState("");

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const pos = position.coords;
        const key = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=${key}&units=metric`
        );

        const data = await response.json();
        console.log(data);
        setWeather({
          temp: data.main.temp,
          humidity: data.main.humidity,
          city: data.name,
        });
      },
      (error) => {
        console.log(error.message);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  console.log(weather);
  //옵셔녈 체이닝(optional chaning)
  return (
    <div>
      <p>온도: {weather?.temp} °C</p>
      <p>습도: {weather?.humidity}%</p>
      <p>도시: {weather?.city}</p>
    </div>
  );
}

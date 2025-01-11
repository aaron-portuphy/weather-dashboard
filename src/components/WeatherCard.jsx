import React from "react";

const WeatherCard = ({ weather }) => {
    const { name, main, weather: weatherInfo, wind } = weather;
  
    return (
      <div className="bg-white shadow rounded p-6 text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500 capitalize">{weatherInfo[0].description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`}
          alt={weatherInfo[0].description}
          className="mx-auto"
        />
        <p>Temperature: {main.temp}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} km/h</p>
      </div>
    );
  };
  
  export default WeatherCard;
  
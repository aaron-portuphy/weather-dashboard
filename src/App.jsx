import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import useFetchWeather from './hooks/useFetchWeather';

const App = () => {
  const [city, setCity] = useState('');
  const { weather, error, fetchWeather } = useFetchWeather();

  const handleSearch = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
  };

  // Real-Time Updates: Refresh data every 5 minutes
  useEffect(() => {
    if (city) {
      const interval = setInterval(() => {
        fetchWeather(city);
      }, 300000); // 300,000ms = 5 minutes
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [city, fetchWeather]);

  return (
    <div className="min-h-screen bg-weather-bg bg-cover bg-center flex flex-col items-center p-6 sm:p-8 md:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
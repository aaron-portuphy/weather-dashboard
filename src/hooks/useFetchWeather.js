import { useState } from 'react';
import { fetchWeatherData } from '../utils/api';

const useFetchWeather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      setError('');
      const data = await fetchWeatherData(city);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return { weather, error, fetchWeather };
};

export default useFetchWeather;

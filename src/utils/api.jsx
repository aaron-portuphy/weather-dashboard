const API_KEY = 'e1b275e323d4f98c4e85ac9a9a5f97b3';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city) => {
  const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) throw new Error('City not found or invalid API request.');
  return await response.json();
};


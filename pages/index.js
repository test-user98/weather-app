import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [city, setCity] = useState('');
  const [returnedCity, setReturnedCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name 😢');
      setWeather(null);
      return;
    }

    try {
      const response = await axios.post('/api/weather', { city });
      setReturnedCity(city);
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError(err.response.data.message);
      setWeather(null);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') getWeather();
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-green-200 pt-48 min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl text-gray-800 text-gray-800 font-bold">Get the Weather for Your City Now!</h1>
        <div className="flex items-center space-x-2">
          <input 
            type="text" 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}    
            placeholder="Enter city" 
            className="px-4 py-2 text-black border-2 border-gray-300 rounded"
          />
          <button 
            onClick={getWeather} 
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Get Weather
          </button>
        </div>
        {error && <p className=".font-semibold text-red-500">{error}</p>}
        {weather && (
          <div className="text-lg text-center text-gray-700 bg-white rounded shadow-md p-4">
            <p className="text-2xl font-bold mb-2">Here are the weather details for {returnedCity} 😌</p>
            <hr className="w-4/5 mx-auto border-gray-300"/>
            <p>Temperature: {weather.temp}°C</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Wind Speed: {weather.windSpeed} m/s</p>
            <p>Description: {weather.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

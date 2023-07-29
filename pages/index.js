import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async () => {
    try {
      const response = await axios.post('/api/weather', { city });
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError(err.response.data.message);
      setWeather(null);
    }
  };

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={getWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <p>Temperature: {weather.temp}</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Wind Speed: {weather.windSpeed}</p>
          <p>Description: {weather.description}</p>
        </div>
      )}
    </div>
  );
}

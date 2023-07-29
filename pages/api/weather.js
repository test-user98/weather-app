import axios from 'axios';

  export default async function handler(req, res) {
  const { city } = req.body;
  
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`);
    const data = response.data;

    const weatherData = {
      temp: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
    };

    res.status(200).json(weatherData);
  } catch (err) {
    if(err.response.data.cod == '404') 
      res.status(404).json({ message: 'The location does not exist. Please check the input entered.' });
    else res.status(err.response.status).json({ message: err.response.statusText });
  }
}
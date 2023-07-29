import axios from 'axios';

// This function handles POST requests to '/api/weather'
  export default async function handler(req, res) {
  const { city } = req.body;
  
  try {
    // Make a request to the OpenWeatherMap API
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`);
    const data = response.data;

    // Create an object to store necessary weather data
    const weatherData = {
      temp: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
    };

    //on successful response return the data as json with 200 status code
    res.status(200).json(weatherData);
  } catch (err) {
    // this check is given by api, for a gibberiesh city, 404 error code is returned by api
    if(err.response.data.cod == '404') 
      res.status(404).json({ message: 'The location does not exist. Could you pelase recheck your input. ' });
    else res.status(err.response.status).json({ message: err.response.statusText });
  }
}
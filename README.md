# weather-app
A web app showing temp, windspeed, humidity and weather description for the Location provided.
YOu can check it out here: https://tinyurl.com/zfffvj5c

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need to have the following installed:

- Node.js
- npm

### Installing

1. Clone the repository:
```git clone https://github.com/test-user98/weather-app.git```


2. Navigate to the cloned project directory
cd weather-app


3. Install the required dependencies
```npm install axios```
### for testing puposese ###
```npm install --save-dev jest @testing-library/react @testing-library/jest-dom supertest```
```npm install --save-dev babel-jest @babel/preset-env```


4. Create a `.env.local` file in your project root and add your OpenWeatherMap API Key:

`API_KEY= 'Your API KEY'`

5. Start the development server:
```npm run dev```

Your app should now be running on http://localhost:3000.

## Features

- Users can input a city name.
- The weather details of the entered city are fetched from the OpenWeatherMap API when the 'Get Weather' button is clicked.
- The details include temperature, humidity, wind speed, and a description of the weather.
- If a user enters a city that does not exist or the API does not return data, an error message is displayed.
- If a user doesn't enter any city name and clicks the 'Get Weather' button, an error message is displayed.
- A success message is displayed along with the weather data when a valid city name is entered.
- The input field and button are styled and placed at the center of the page.
- The background has a light gradient.
- Error and success messages are styled appropriately.

## Built With

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

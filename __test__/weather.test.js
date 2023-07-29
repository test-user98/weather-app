const request = require('supertest');
const { server } = require('../server'); // Assuming you have a server.js file exporting your server

describe('POST /api/weather', () => {
  it('responds with weather data for valid city', async () => {
    const city = 'London';
    const res = await request(server).post('/api/weather').send({ city });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('temp');
    expect(res.body).toHaveProperty('description');
    expect(res.body).toHaveProperty('humidity');
    expect(res.body).toHaveProperty('windSpeed');
  });

  // More test cases here...
});

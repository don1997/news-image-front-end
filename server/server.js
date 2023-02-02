const express = require('express');
const request = require('request');

const cors = require('cors');

const app = express();

const http = require('http');
app.use(cors());
const apiKey = "3bc498625c324399abae4f472f7fa3af"

//endpoint
app.get('/news', (req, res) => {
  const userAgent = req.get('user-agent');

  const options = {
    host: 'newsapi.org',
    path: `/v2/top-headlines?country=us&apiKey=${apiKey}`,
    headers: {
      'User-Agent': userAgent
    },
    method: 'GET'
  };

  const request = http.request(options, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const newsData = JSON.parse(data);
      res.json(newsData);
    });
  });

  request.on('error', (error) => {
    console.error(`Error making request: ${error.message}`);
  });

  request.end();
});
const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server running on port ${port}`);
});

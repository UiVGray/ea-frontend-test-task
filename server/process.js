const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/', (request, response, next) => {
  response.send(`
    insert form here
  `);
});

app.post('/data.json', (request, response, next) => {
  response.send(request.body);
});

app.listen(3000, () => console.log('running server...'));
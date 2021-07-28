const express = require('express');
const bodyParser = require('body-parser');

const employeeRoutes = require('./src/Routes/route')
const date = require('date-and-time');

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
const database = process.env.DATABASE || 'TEST DB';
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use('/api/v1/employees', employeeRoutes)

// define a root route
app.get('/', (req, res) => {
  const now = new Date();
  res.send(`${date.format(now, 'ddd, MMM DD YYYY HH:mm:ss')}: Employee API to get data from "${database}"`);
});

// listen for requests
app.listen(port, () => {  
  console.log(`Server is listening on port ${port}`);
});
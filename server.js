
const express = require('express'); // laster inn lib: express
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express(); // gjør express om til en variablel: app
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (request, response) => response.send('Hello World')); // get commando for å sjekke "Hello w.."


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
});
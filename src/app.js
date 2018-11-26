const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const ExampleController2 = require('./controllers/exampleController2');
const ExampleController = require('./controllers/exampleController');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 2000;
const PATH_TO_TEMPLATES = 'src/views/';

app.use(express.static('assets'));

nunjucks.configure(PATH_TO_TEMPLATES, {
  autoescape: true,
  express: app
});

function initControllers () {
  const controller1 = new ExampleController2(app);
  const controller2 = new ExampleController(app);
  controller1.init();
  controller2.init();
}

function startServer () {
  app.listen(PORT, () => console.log(`Ommpa Loompas are on port ${PORT}!`));
}

initControllers();
startServer();

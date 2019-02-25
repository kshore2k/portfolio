const express = require('express');

const favicon = require('serve-favicon');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.use(favicon(path.join(__dirname + '/static/img/favicon.ico')));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

require('./routes')(app);

app.listen(8000, () => {
    console.log('listening on port 8000')
});
const { static } = require('express');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
      
app.engine('.hbs',exphbs({
  defaultLayout:'main',
  layautsDir: path.join(app.get('views'), 'layouts'),
  partials: path.join(app.get('views'), 'partials'),
  extname:'hbs'
}));
app.set('view engine','.hbs');

//middlewares\
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
// global variables..

// routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
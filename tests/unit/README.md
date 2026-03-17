const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const session = require('express-session');

const app = express();

app.use(express.static('public'));

const hbsInstance = hbs.create({
  defaultLayout: 'main',
  extname: '.hbs'
});

app.engine('hbs', hbsInstance.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
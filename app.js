var express = require('express');
var path = require('path');
const consign = require('consign');
const app = express(); 


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

consign({})
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app); 

app.listen(3000, () => {
  console.log('Ntalk no ar!');
})

module.exports = app;

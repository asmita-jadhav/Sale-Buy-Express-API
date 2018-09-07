var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var bodyParser = require('body-parser');
var cors = require('cors');

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Portal');

const app=express();
const PORT=3000;

require('./models/Electronics');
require('./models/Furnitures');
require('./models/Properties');
require('./models/Vehicles');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
*/

var ElectronicsRouter = require('./routes/Electronics');
var FurnituresRouter = require('./routes/Furnitures');
var PropertiesRouter = require('./routes/Properties');
var VehiclesRouter = require('./routes/Vehicles');

app.use('/Electronics', ElectronicsRouter);
app.use('/Furnitures', FurnituresRouter);
app.use('/Properties', PropertiesRouter);
app.use('/Vehicles', VehiclesRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
  
  // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000,function(){
    console.log(`Your server is running on port ${PORT}`);
});

module.exports = app;
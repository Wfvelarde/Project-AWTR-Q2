var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var members = require('./routes/members');
var romps = require('./routes/romps');
var mem_romps_join = require('./routes/mem_romps_join');
var modActivity = require('./routes/modActivity');
var verify = require('./routes/verify');
var trips = require('./routes/trips');
var activities = require('./routes/activities');
var trip_activity_join = require('./routes/trip_activity_join');
var romp_trips = require('./routes/romp_trips');
var get_member_romps = require('./routes/get_member_romps');
var get_member_id = require('./routes/get_member_id');
var get_trips = require('./routes/get_trips');
var get_romp_ID = require('./routes/get_romp_ID');
var get_activities = require('./routes/get_activities');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//
app.use('/', index);
app.use('/users', users);
app.use('/members', members);
app.use('/romps', romps);
app.use('/mem_romps_join', mem_romps_join);
app.use('/modActivity', modActivity);
app.use('/verify', verify);
app.use('/trips', trips);
app.use('/activities', activities);
app.use('/trip_activity_join', trip_activity_join);
app.use('/romp_trips', romp_trips);
app.use('/get_member_romps', get_member_romps);
app.use('/get_member_id', get_member_id);
app.use('/get_trips', get_trips);
app.use('/get_romp_ID', get_romp_ID);
app.use('./get_activities', get_activities);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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



module.exports = app;

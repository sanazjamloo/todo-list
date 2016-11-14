var express        = require('express');
var path           = require('path');
var mongoose       = require('mongoose');
mongoose.Promise   = global.Promise;
var logger         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoURI       = process.env.MONGODB_URI || 'mongodb://localhost/'

var app = express();
app.listen(process.env.PORT || 3000);
  console.log(' App is listening to the port 3000');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')))

app.use('/todos', require('./controllers/todos.js'));

var mongoURI = 'mongodb://localhost/todos'

mongoose.connect(mongoURI);

app.get('/random-user', (req, res) => {
  var user = faker.helpers.userCard();
  user.avatar = faker.image.avatar();
  res.json(user)
});

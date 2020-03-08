// import required libs and folders
var express = require('express');
var bodyParser = require('body-parser');
var product = require('./route/book-api-gateway');
var app = express();


// Set up mongo/mongoose connection
var mongoose = require('mongoose');
// you need to install mongoDB on your own pc or you can freely get space from -> mlab.com 
var dev_db_url = 'mongodb+srv://sample-user:sample-password@sakinramazan-cluster-sbiyc.mongodb.net/test?retryWrites=true&w=majority';
var mongoDB = dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/books', product);

var port = 5075;

app.listen(port, () => {
    console.log('Server is up and listening to port number : ' + port);
});

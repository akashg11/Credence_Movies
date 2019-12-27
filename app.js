var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Movie = require('./models/movie');
addmovie = require('./models/addmovie');


app.use(bodyParser.json());

//connect to Mongoose
mongoose.connect('mongodb://localhost/credence_analytics',{useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
     
app.get('/', function(req, res){
    res.send('Wakanda Foreva!');
});

app.get('/api/movies',function(req, res){
    Movie.getMovies(function(err, movie){
        if(err){
            throw err;
        }
        res.json(movie); 
    });
});


app.get('/api/movies/get-by-id/:_id',function(req, res){
    Movie.getMovieById(req.params._id, function(err, movie){
        if(err){
            throw err;
        }
        res.json(movie);
    });
});

app.post('/api/movies/add-movie',function(req, res){
    var movie = req.body;
    addmovie.addMovie(movie, function(err, movie){
        if(err){
            throw err;
        }
        res.json(movie); 
    });
});

app.listen(3009);
console.log('Running on port 3009....');    
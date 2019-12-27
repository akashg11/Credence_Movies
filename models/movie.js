var mongoose = require('mongoose');

//Movie Schema
var movieSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required: true
    },
    summary:{
        type:String,
        required: true
    }
});


var movie = module.exports = mongoose.model('movie', movieSchema);

// Get movies
module.exports.getMovies = function(callback,limit){
    movie.find(callback).limit(limit);
}

// Get a single book by id
module.exports.getMovieById = function(id, callback){
    movie.findById(id, callback)};


//adding a movie
module.exports.addmovie = function(movie, callback){
    movie.create(movie, callback);
}



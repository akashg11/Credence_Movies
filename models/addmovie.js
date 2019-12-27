var mongoose = require('mongoose');

//Movie Schema
var addmovieSchema = mongoose.Schema({
    name:{
        type:String,
        required: 'Please enter name of the movie'
    },
    img:{
        type:String,
        required: 'Please enter image url'
    },
    summary:{
        type:String,
        required: 'please write summary for the movie'
    }
});




var addmovie = module.exports = mongoose.model('addmovie', addmovieSchema);


//adding a movie
module.exports.addMovie = function(movie, callback){
    addmovie.create(movie, callback);
}
   
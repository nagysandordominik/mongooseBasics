const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {   
        console.log('Connection is open!')
    })
    .catch(err => {
        console.log('Error occured')
        console.log(err)
    })


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score:Number
});

const Movie = mongoose.model('Movie', movieSchema);

Movie.insertMany([
    {title: 'GOAL!', year: 2005, score: 9.0},
    {title: 'Intouchables', year: 2011, score: 9.5},
    {title: 'Üvegtigris', year: 2002, score: 4.0},
    {title: 'Valami amerika', year: 2001, score: 3.0}
])
.then(data => {
    console.log('It worked!');
    console.log('data');
})


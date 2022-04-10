const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/person')
    .then(() => {   
        console.log('Connection is open!')
    })
    .catch(err => {
        console.log('Error occured')
        console.log(err)
    })

const personSchame = new mongoose.Schema({
        first: String,
        last: String
})

personSchame.virtual('fullName').get(function () {
        return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person', personSchame);


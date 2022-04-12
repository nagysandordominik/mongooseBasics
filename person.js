const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/person')
    .then(() => {   
        console.log('Connection is open!')
    })
    .catch(err => {
        console.log('Error occured')
        console.log(err)
    })

const personSchema = new mongoose.Schema({
        first: String,
        last: String
})

personSchema.virtual('fullName').get(function () {
        return `${this.first} ${this.last}`
})

personSchema.pre('save', async function () {
    console.log('About to save')
})

personSchema.post('save', async function () {
    console.log('Saved now')
})

const Person = mongoose.model('Person', personSchema);


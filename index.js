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

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type:Boolean,
        default:false
    },
    categories: [String],
    qty: {
        online: {
            type:Number,
            default:0
        },
        inStore: {
            type:Number,
            default:0
        }
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product ({ name: 'Csepel Cruiser', price: 95000, categories: ['Cycling', 'Safety'] })
bike.save()
    .then(data => {
        console.log('It worked!');
        console.log(data);
    })
    .catch(err => {
        console.log('Error')
        console.log(err)
    })
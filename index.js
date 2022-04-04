const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {   
        console.log('Connection is open!')
    })
    .catch(err => {
        console.log('Error occured')
        console.log(err)
    })

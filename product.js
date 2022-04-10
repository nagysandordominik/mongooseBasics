const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping')
    .then(() => {   
        console.log('Connection is open!')
    })
    .catch(err => {
        console.log('Error occured')
        console.log(err)
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
        min: [0, 'Price must be positive!']
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
    },
    size: {
        type:String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Helmet'});
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
}

findProduct();


const bike = new Product ({ name: 'Helmet', price: 10000, categories: ['Cycling', 'Safety'], size: 'S' })
bike.save()
    .then(data => {
        console.log('It worked!');
        
    })
    .catch(err => {
        console.log('Error')
        console.log(err)
    })

// Product.findOneAndUpdate({name: 'Csepel Cruiser'}, {price: -1000}, {new: true, runValidators: true})
//     .then(data => {
//         console.log('It worked!');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Erro')
//         console.log(err)
//     })


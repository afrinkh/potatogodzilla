const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String
    },
    img: {
        type: String
    },
    url: {
        type: String
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
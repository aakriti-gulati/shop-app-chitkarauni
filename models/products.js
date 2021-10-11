const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({

    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    comment: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: String,
    }
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        min: 0
    },
    img: {
        type: String,
        trim: true,
        default: '/images/product.jpg'
    },
    desc: {
        type: String,
        trim: true
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ] 
});

const Product = mongoose.model('Product', productSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports ={ Product,Review};

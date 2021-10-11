const express = require('express');
const router = express.Router(); //router acts as a mini-application and its akind of middleware for routes
const {Product} = require('../models/products');
const {Review} = require('../models/products');
const {isLoggedIn} = require('../middleware');
const passport = require('passport');

//to show all products
router.get('/products', async (req,res)=>{

    try {
        const products = await Product.find({});

    res.render('products/index',{products});
    }
    catch(e) {
        req.flash ('error', 'oops,something went wrong!');
        res.redirect('/error');
    }

});

//to add new product
router.get('/products/new', (req,res)=>{
    res.render('products/new');
});

//create new product with the given payload

router.post('/products', isLoggedIn, async (req,res)=>{
    try {
        const newProduct = {
            ...req.body
        }
        await Product.create(newProduct);
        req.flash('success', 'Product created successfully!');
        res.redirect('/products');
    }
    catch (e) {
        req.flash ('error', 'oops,something went wrong!');
        res.redirect('/error');
    }
});

//to show all the info about a product

router.get('/products/:id', async (req,res)=>{
    try {
        const {id} = req.params;

        const product = await Product.findById(id).populate('reviews');

        res.render('products/show',{product});
    } catch(e) {

        req.flash ('error', 'oops,something went wrong!');
        res.redirect('/error');

    }
});

//to edit a product
router.get('/products/:id/edit', isLoggedIn, async(req,res)=>{
    try {
        const {id} = req.params;

    const product = await Product.findById(id);

    res.render('products/edit', {product});
    }
    catch (e) {
        req.flash ('error', 'oops,something went wrong!');
        res.redirect('/error');
    }

});

//updating the product with the given payload and getting the edit form prefilled with data

router.patch('/products/:id', isLoggedIn, async (req,res)=>{
    try {
        const updatedProduct = req.body;
    const {id} = req.params;

    await Product.findByIdAndUpdate(id, updatedProduct);

    res.redirect(`/products/${id}`);
    }
    catch(e) {
        req.flash ('error', 'oops,something went wrong!');
        res.redirect('/error');
    }
});

router.delete('/products/:id', isLoggedIn, async (req,res)=>{
    try {
        const {id} = req.params;

    await Product.findByIdAndDelete(id);

    res.redirect('/products');
    }
    catch(e) {
        req.flash ('error', 'oops,something went wrong!');
        res.redirect('/error');
    }
});

//creating a review for each product

router.post('/products/:id/review', isLoggedIn, async(req,res)=>{

    try {
        const {id} = req.params;
    
    const product = await Product.findById(id).populate('reviews');
    // console.log(product);
    // const pro = await Product.findById(id);
    // console.log(pro);
    // console.log(req.user);
    // console.log(req.user.username);
    const { rating, comment } = req.body;

    // const user = req.user.username;
    // console.log(username);
    const review = new Review({rating, comment,user:req.user.username });
    // console.log(review.username);
    // console.log(review.rating);
    product.reviews.push(review);

    await product.save();
    await review.save();

    req.flash('success', 'Successfully created your review'); //'success' is the key for message
    res.redirect(`/products/${id}`);
}
catch (e) {
    req.flash ('error', 'oops,something went wrong!');
        res.redirect('/error');
}

});


module.exports = router;

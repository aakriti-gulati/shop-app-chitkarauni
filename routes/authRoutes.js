const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

// router.get('/fakeuser', async (req,res)=>{

//     const user = new User({
//         username:'aakriti',
//         email: 'aakriti@gmail.com'
//     });

//     const newUser = await User.register(user, 'aakriti1234');

//     res.send(newUser);

// });


//get the sign up form
router.get('/register', (req,res)=>{
    res.render('auth/signup');
});

//register the new user in db
router.post('/register', async (req,res)=>{
    try {
        // console.log(req.body);
    const {username,email,password} = req.body;

    const user= new User({
        username: username,
        email: email
    });

    await User.register(user,password);

    req.flash('success', `Welcome ${username}, Please login to continue!`);
    res.redirect('/products');
    }
    catch(e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }

});

//get the login page
router.get('/login', (req,res)=>{
    res.render('auth/login');
});

//login the user
router.post('/login', 
    passport.authenticate('local', 
    { 
        failureRedirect: '/login',
        failureFlash: true 
    }), (req,res)=>{
        const {username} = req.user;
        req.flash('success', `Welcome back ${username}`);
        res.redirect('/products');
    });

//logging out a user
router.get('/logout', (req,res)=>{
    req.logout();

    req.flash('success', 'Logout Successfully!!');
    res.redirect('/login');
});


module.exports = router;
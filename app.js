if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}




const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DB connected'))
.catch((err)=>console.log(err));

// seedDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const sessionConfig = {
    secret: 'Weneedabettersecret',
    resave: false,
    saveUninitialized: true,
}

// console.log(process.env.MY_NAME);
// console.log(process.env.API_KEY);

app.use(session(sessionConfig)); //session middleware
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success'); //res.locals sare view folder me jitni files h usme applicable karane me kaam aata hai
    res.locals.error = req.flash('error');
    next();
});


const productRoutes = require('./routes/productRoutes.js');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.get('/',(req,res)=>{
    res.send('Home page');
});

app.get('/error', (req,res)=>{

    res.render('error');

});

app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);


app.listen(process.env.PORT || 2323, ()=>{
    console.log('Server running at port 2323');
});

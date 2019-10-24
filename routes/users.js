
//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let User = require('../models/user.model');

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all users on record
// GET: /
// ========================================
router.get('/', async (req, res) => {
    try {
        const user = await User.find()
        res.send(user)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

// 2. add a new user
// POST /
// ========================================
router.post('/add', async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.send(result)
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})

// SIGN UP FORM
// POST /sign-up
router.post('/sign-up', async(req, res) => {
    try{
        //if username & password are present than post information
        if(req.body.username && req.body.password){
            const user = new User(req.body);
            const result = await user.save();
            res.send(result);
        } 
        //if username or password are not present than send error
        else {
            res.status(400).send('All fields required')
        }
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

// LOGIN FORM
// POST /login
router.post('/login', function(req, res, next){
    if(req.body.username && req.body.password){
        User.authenticate(req.body.username, req.body.password, function(err, user){
            if(err || !user){
                var err = new Error('Wrong email or password')
                err.status = 401;
                return next(err);
              } else {
                req.session.userId = user._id;
                return res.status(200).json({
                    success:true,
                    session: req.session.userId
                })
              }
            });
          } else {
            var err = new Error('Email and password are required')
            err.status = 401;
            return next(err);
       }
})

//logout
router.get('/logout', function(req, res, next){
    if(req.session){
        req.session.destroy(function(err){
            if(err){
                return next(err);
            } else {
                res.send('Session deleted')
            }
        })
    }
})

//sessions
router.get('/sessions', (req, res) => {
    if(req.session){
      return res.status(200).json({
          success:true,
          session: req.session.userId
      })
    } else {
        res.send('no current session')
    }
})

// get profile of current user
router.get('/profile', async(req,res) => {
    try {
        const user = await User.findById(req.session.userId)
        res.send(user)
       
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

router.get('/:username', async(req,res) => {
    try {
        const user = await User.find({username: req.params.username})
        res.send(user)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})


module.exports = router;
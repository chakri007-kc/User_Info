const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const des= req.body.des;

    const newUser = new User({username,des});

    newUser.save()
    .then( ()=> res.json('New Blog Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/:id').delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then( ()=> res.json('Blog Deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req,res)=>{
    User.findById(req.params.id)
    .then(user =>{
        user.username = req.body.username;
        user.des= req.body.des;
     
        user.save()
        .then( ()=> res.json('Blog Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;

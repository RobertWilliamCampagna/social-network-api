const { User } = require('../models');
const { Thought } = require('../models/Thought');
const { Reaction } = require('../models/Reaction');
const router = require('express').Router();

// Get all Users
// Get a single user by _id
// Post new User
// Put to update by _id
// Delete to remove by _id

router.get('/users', (req, res) => {
    User.find({})
    .then(allUsers => {
        res.json(allUsers);
    })

});

router.get('/user/:id', (req, res) => {
    User.findOne({_id: params.id})
        .then(singleUser => {
            res.json(singleUser);
        })
});


router.post('/user/new', (req, res) =>{
    User.create()
    .then(newUser => {
        res.json(newUser);
    })
});

router.put('/user/update', (req, res) => {
    User.findOneAndUpdate({ _id: params.userId}, body, { new: true })
    .then(updateUser => {
        if(!updateUser){
            res.status(404).json({ message: "No User found with this id."});
            return;
        }
        res.json(updateUser);
    })
    .catch(err => res.json(err));
});


router.delete('/user/delete'), ({ params}, res) => {
    User.findByIdAndDelete({ _id: params.id })
    .then(deleteUser => res.json(deleteUser))
    .catch(err=> res.json(err));

};







module.exports = router
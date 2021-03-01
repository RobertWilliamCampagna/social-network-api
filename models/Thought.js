const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema = require('../models/Reaction');

const ThoughtSchema = new Schema (
    {
    thoughtText: {
        type: String,
        required: "Please enter a thought." ,
        minlength: 1,
        maxlength: 280
    },
    createdAt : {
        type: Date,
        default: Date.now,
        get: thoughtTime => dateFormat(thoughtTime)
    },
    username: {
        type: String, 
        required: "User is required"
    },
    // reactions:  [ReactionSchema]
    },
    {
         toJSON: {
          virtuals: true,
          getters: true
        },
}
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
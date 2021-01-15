const mongoose = require("mongoose");

// we create a schema with which we can later create a model

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true
    }, 
    password:{
        type: String,
        required: true
    }
});

mongoose.model("User", userSchema);
const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }

});

mongoose.model('User', userSchema);
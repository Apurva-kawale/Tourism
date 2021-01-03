const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://apurva1:Mongo@123@cluster0.qo1kt.mongodb.net/TourismDB?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MOngoDB connection succeded') } else { console.log('Erro in DB connection-' + err) }
});

require('./user.model');
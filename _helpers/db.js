const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
    .then(() => {
        console.log(process.env.MONGODB_URI || config.connectionString)
    })
    .catch(err => {
        console.log(err);
    })
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user.model'),
    Hospital: require('../models/hospital.model'),
    Request: require('../models/request.model'),
    Orequest: require('../models/orequest.model'),
    Contact: require('../models/contact.model'),
    Appointment: require('../models/appointment.model')
};

// connection_string:"mongodb://localhost/major"
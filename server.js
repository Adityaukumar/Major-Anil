require('rootpath')();
const express = require('express');
const app = express(); 
const cors = require('cors');
const bodyParser = require('body-parser');
var path=require('path');

const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/users',require('./routes/users.controller'));
app.use('/donor',require('./routes/donor.controller'));

app.use(express.static(path.join(__dirname,'public')));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})


// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 8080;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

//const jwt = require('_helpers/jwt');
// use JWT auth to secure the api
//app.use(jwt());

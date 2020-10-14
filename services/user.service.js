const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;
const Hos = db.Hospital;
const Req = db.Request;
const Oreq = db.Orequest;
const App = db.Appointment;
const Cont = db.Contact;
//  FILE UPLOADS
var fs = require('fs');
var path=require('path');

module.exports = {
    authenticate,
    getAll,
    getDonor,
    getById,
    getAppointment,
    req,
    create,
    creation,
    appointment,
    request,
    Count,
    Orequest,
    Contact,
    update,
    deleteReq
};

async function create(userParam) {     //SIGNUP USER REGISTERATION
    // validate
    if (await User.findOne({ username: userParam.name })) {
        throw 'Username "' + userParam.name + '" is already taken';
    }
    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }
    //file syntax
    //  var imgpath=userParam.profilePic;
    //  var file=imgpath.replace(/.*(\/|\\)/,'');
    //  user.image.data=fs.readFileSync(file);  //blob data
    //  user.image.type='image/jpg';
    // save user
    await user.save();
}

async function creation(userParam) {    //SIGNUP HOSPITAL REGISTERATION
    // validate
    if (await Hos.findOne({ username: userParam.hid })) {
        throw 'ID "' + userParam.hid + '" is already taken';
    }
    const user = new Hos(userParam);

    // hash password
    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }
    //file syntax

    // var imgpath=userParam.profilePic;
    // var file=imgpath.replace(/.*(\/|\\)/,'');
    // user.image.data=fs.readFileSync(file);  //blob data
    // user.image.type='image/jpg';

    // save user
    await user.save();
}

async function authenticate({ name, password }) {   //LOGIN USER AUTHENTICATION 
    const user = await User.findOne({ name });
    const hosp = await Hos.findOne({ name });
    if (user && bcrypt.compareSync(password, user.password)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
    if (hosp && bcrypt.compareSync(password, hosp.password)) {
        const { hash, ...userWithoutHash } = hosp.toObject();
        const token = jwt.sign({ sub: hosp.hid }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function Orequest(request) {          //ORGAN REQUEST CREATION
    const req = new Oreq(request);
    await req.save();
}

async function request(request) {       //BLOOD REQUEST CREATION
    const req = new Req(request);
    await req.save();
}


async function appointment(request) {
    const req = new App(request);
    await req.save();                      //APPOINTMENT-FORM CREATION 
}

async function getAppointment(){ 
    return await App.find().select('-hash');  //RETURN ALL APPOINTMENTS FOR THAT HOSPITAL
}

async function Count() {                //SPECIFIC USER FORM-COUNT
    const cont = new App();
    const val = cont.name;
    const count = await App.countDocuments({ val });
    return count;
}

async function getDonor(val) {      //GETTING DONORS LIST BY TYPE
    return await User.find({ type: val });
}

async function req(val) {               //RETURN REQUEST MESSAGE
    const rval = await Req.findOne({}, { _id: 0 }, { id: 1, type: val });
    const oval = await Oreq.findOne({}, { _id: 0 }, { id: 1, type: val });
    if (val == 'bdonor') {
        if (await Req.findOne({ id: rval.id })) {
            return await rval;
        }
    }
    else if (val == 'odonor') {
        if (Oreq.findOne({ id: oval.id })) {
            return await oval;
        }
    }
    else {
        throw 'INVALID FETCHING';
    }

}

async function deleteReq(did, dtype) {      //DELETE REQUEST MESSAGE
    if (dtype == 'bdonor') {
        await Req.deleteOne({ id: did });
    }
    else if (dtype = 'odonor') {
        await Oreq.deleteOne({ id: did });
    }
    else {
        throw "Invalid fetching";
    }
}

async function Contact(request) {   //CONTACT DETAILS CREATION
    const req = new Cont(request);
    return await req.save();
}


async function getAll() {           //ALL REGISTERED USERS 
    return await User.find().select('-hash');
}

async function getById(id) {        //FILTERING USER BY ID
    return await User.findById(id).select('-hash');
}

async function update(id, userParam) {      //UPDATE USER DETAILS
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}


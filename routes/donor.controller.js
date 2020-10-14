const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

// routes
router.get('/donorList/:type', getDonor);
router.get('/getReq/:type', getReq);
router.delete('/delReq/:id/:type', delReq);
router.get('/appointment', getApp);
    //SENDER SMS API 
module.exports = router;

function getDonor(req, res, next) {
    userService.getDonor(req.params.type)
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getReq(req, res, next) {
    userService.req(req.params.type)
        .then(users => res.json(users))
        .catch(err => next(err));
}

function delReq(req, res, next) {
    userService.deleteReq(req.params.id, req.params.type)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getApp(req, res, next) {
    userService.getAppointment()
        .then(data => res.json(data))
        .catch(err => next(err));
}
const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

router.post('/authenticate', authenticate);          
router.post('/register',register);
router.get('/', getAll);
router.get('/count', count);
router.post('/request', request);
router.post('/orequest', oRequest);
router.post('/app', appoint);
router.post('/hospital', hospital);
router.get('/current', getCurrent);
router.post('/contact', send)
router.get('/:id', getById);
router.put('/:id', update);
router.get('/notify', getNotif);
router.delete('/:id', _delete);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => {
            return user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' });
        })
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
function getNotif(req, res, next) {
    userService.get().then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err));
}

function request(req, res, next) {
    userService.request(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function oRequest(req, res, next) {
    userService.Orequest(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function hospital(req, res, next) {
    userService.creation(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function appoint(req, res, next) {
    userService.appointment(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function send(req, res, next) {
    userService.Contact(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function count(req, res, next) {
    userService.Count()
        .then(data => res.json(data))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
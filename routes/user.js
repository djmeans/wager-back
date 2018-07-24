const express = require('express');
const router = express.Router();
const queries = require('../queries/queries.js');

router.get('/', (req, res) => {
    queries.getAllData('user').then(users =>{
        res.json({users})
    })
});

router.get('/:id', (req, res) => {
    queries.getById(req.params.id, 'user').then(user => {
        res.json({ user })
    })
});

router.put('/:id', (req, res) => {
    queries.update(req.params.id, req.body, 'user').then(user => {
        res.status(201).json({user})
    })
});

router.post('/', (req, res) => {
    queries.create(req.body, 'user').then(user => {
        res.status(201).json({ user });
    })
});

router.delete('/:id', (req, res) =>{
    queries.delete(req.params.id, 'user').then(res.status(201).json({ deleted: true}))
});


module.exports = router;
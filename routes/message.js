const express = require('express');
const router = express.Router();
const queries = require('../queries/queries.js');

router.get('/', (req, res) => {
    queries.getAllData('message').then(messages =>{
        res.json({messages})
    })
});

router.get('/:id', (req, res) => {
    queries.getById(req.params.id, 'message').then(message => {
        res.json({ message })
    })
});

router.put('/:id', (req, res) => {
    queries.update(req.params.id, req.body, 'message').then(message => {
        res.status(201).json({message})
    })
});

router.post('/', (req, res) => {
    queries.create(req.body, 'message').then(message => {
        res.status(201).json({ message });
    })
});

router.delete('/:id', (req, res) =>{
    queries.delete(req.params.id, 'message').then(res.status(201).json({ deleted: true})
    )
})

module.exports = router;
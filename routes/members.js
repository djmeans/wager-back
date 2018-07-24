const express = require('express');
const router = express.Router();
const queries = require('../queries/queries.js');
router.get('/', (req, res) => {
    queries.getAllData('member').then(members =>{
        res.json({members})
    })
});

router.get('/:id', (req, res) => {
    queries.getById(req.params.id, 'member').then(member => {
        res.json({ member })
    })
});

router.put('/:id', (req, res) => {
    queries.update(req.params.id, req.body, 'member').then(member => {
        res.status(201).json({member})
    })
});

router.post('/', (req, res) => {
    queries.create(req.body, 'member').then(member => {
        res.status(201).json({ member });
    })
});

router.delete('/:id', (req, res) =>{
    queries.delete(req.params.id, 'member').then(res.status(201).json({ deleted: true}))
})


module.exports = router;
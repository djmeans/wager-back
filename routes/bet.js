const express = require('express');
const router = express.Router();
const queries = require('../queries/queries.js');

router.get('/', (req, res) => {
    queries.getAllData('bet').then(bets =>{
        res.json({bets})
    })
});

router.get('/:id', (req, res) => {
    queries.getById(req.params.id, 'bet').then(bet => {
        res.json({ bet })
    })
});

router.put('/:id', (req, res) => {
    queries.update(req.params.id, req.body, 'bet').then(bet => {
        res.status(201).json({bet})
    })
});

router.post('/', (req, res) => {
    queries.create(req.body, 'bet').then(bet => {
        res.status(201).json({ bet });
    })
});

router.delete('/:id', (req, res) =>{
    queries.delete(req.params.id, 'bet').then(res.status(201).json({ deleted: true})
    )
})

module.exports = router;
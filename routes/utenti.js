const express = require('express');
const router = express.Router();
const utentiDAO = require('../dao/utentiDAO');

router.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    utentiDAO.getAll({ limit, offset }, (err, result) => {
        if (err) return res.status(500).json({ errore: err.message });
        res.json(result);
    });
});

router.post('/', (req, res) => {
    utentiDAO.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ errore: err.message });
        res.status(201).json({ id: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    utentiDAO.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).json({ errore: err.message });
        res.sendStatus(204);
    });
});

router.delete('/:id', (req, res) => {
    utentiDAO.delete(req.params.id, (err) => {
        if (err) return res.status(500).json({ errore: err.message });
        res.sendStatus(204);
    });
});

module.exports = router;
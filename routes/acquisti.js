const express = require('express');
const router = express.Router();
const acquistiDAO = require('../dao/acquistiDAO');

router.get('/', (req, res) => {
    const { data, id_biglietto } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    acquistiDAO.getAll({ data, id_biglietto, limit, offset }, (err, result) => {
        if (err) return res.status(500).json({ errore: err.message });
        res.json(result);
    });
});

router.post('/', (req, res) => {
    acquistiDAO.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ errore: err.message });
        res.status(201).json({ id: result.insertId });
    });
});

router.put('/:id', (req, res) => {
    acquistiDAO.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).json({ errore: err.message });
        res.sendStatus(204);
    });
});

router.delete('/:id', (req, res) => {
    acquistiDAO.delete(req.params.id, (err) => {
        if (err) return res.status(500).json({ errore: err.message });
        res.sendStatus(204);
    });
});

module.exports = router;
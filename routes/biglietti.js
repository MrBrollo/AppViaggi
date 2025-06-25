const express = require('express');
const router = express.Router();
const db = require('../db');

//inserimento biglietto
router.post('/', (req, res) => {
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ errore: 'Nome richiesto' });
    }

    const sql = 'INSERT INTO biglietti (nome) VALUES (?)';
    db.execute(sql, [nome], (err, result) => {
        if (err) return res.status(500).json({ errore: err.message });
        res.status(201).json({ id: result.insertId, nome });
    });
});

//modifica biglietto
router.put('/:id', (req, res) => {
    const { nome } = req.body;
    const { id } = req.params;

    if (!nome) {
        return res.status(400).json({ errore: 'Nome obbligatorio' });
    }

    const sql = 'UPDATE biglietti SET nome = ? WHERE id = ?';
    db.execute(sql, [nome, id], (err, result) => {
        if (err) return res.status(500).json({ errore: err.message });
        if (result.affectedRows === 0) {
            return res.status(404).json({ errore: 'Biglietto non trovato' });
        }
        res.json({ id, nome });
    });
});

//cancellazione biglietto
router.delete(':/id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM biglietti WHERE id = ?';
    db.execute(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ errore: err.message });
        if (result.affectedRows === 0) {
            return res.status(404).json({ errore: 'Biglietto non trovato' });
        }
        res.json({ messaggio: 'Biglietto eliminato con successo' });
    });
});

module.exports = router;
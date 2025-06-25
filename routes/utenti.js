const express = require('express');
const router = express.Router();
const db = require('../db');

// Inserimento utente
router.post('/', (req, res) => {
    const { nome, cognome, email } = req.body;
    if (!nome || !cognome || !email) {
        return res.status(400).json({ errore: 'Nome, cognome ed email sono richiesti' });
    }

    const sql = 'INSERT INTO utenti (nome, cognome, email) VALUES (?, ?, ?)';
    db.execute(sql, [nome, cognome, email], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ errore: 'Email già registrata' });
            }
            return res.status(500).json({ errore: err.message });
        }
        res.status(201).json({ id: result.insertId, nome, cognome, email });
    });
});

// Modifica utente
router.put('/:id', (req, res) => {
    const { nome, cognome, email } = req.body;
    const { id } = req.params;

    if (!nome || !cognome || !email) {
        return res.status(400).json({ errore: 'Nome, cognome ed email sono richiesti' });
    }

    const sql = 'UPDATE utenti SET nome = ?, cognome = ?, email = ? WHERE id = ?';
    db.execute(sql, [nome, cognome, email, id], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ errore: 'Email già registrata' });
            }
            return res.status(500).json({ errore: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ errore: 'Utente non trovato' });
        }
        res.json({ id, nome, cognome, email });
    });
});

// Cancellazione utente
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM utenti WHERE id = ?';

    db.execute(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ errore: err.message });
        if (result.affectedRows === 0) {
            return res.status(404).json({ errore: 'Utente non trovato' });
        }
        res.json({ messaggio: 'Utente eliminato con successo' });
    });
});

module.exports = router;
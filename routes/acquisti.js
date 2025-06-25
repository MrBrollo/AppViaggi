const express = require('express');
const router = express.Router();
const db = require('../db');

//Inserimento acquisto
router.post('/', (req, res) => {
    const { id_biglietto, id_utente } = req.body;
    if (!id_biglietto || !id_utente) {
        return res.status(400).json({ errore: 'ID biglietto e ID utente sono obbligatori' });
    }

    const sql = 'INSERT INTO acquisti (id_biglietto, id_utente) VALUES (?, ?)';
    db.execute(sql, [id_biglietto, id_utente], (err, result) => {
        if (err) return res.status(500).json({ errore: err.message });
        res.status(201).json({ id: result.insertId, id_biglietto, id_utente });
    });
});

// Modifica acquisto
router.put('/:id', (req, res) => {
    const { id_biglietto, id_utente } = req.body;
    const { id } = req.params;

    if (!id_biglietto || !id_utente) {
        return res.status(400).json({ errore: 'ID biglietto e ID utente sono obbligatori' });
    }

    const sql = 'UPDATE acquisti SET id_biglietto = ?, id_utente = ? WHERE id= ?';
    db.execute(sql, [id_biglietto, id_utente, id], (err, result) => {
        if (err) return res.status(500).json({ errore: err.message });
        if (result.affectedRows === 0) {
            return res.status(404).json({ errore: 'Acquisto non trovato' });
        }
        res.json({ id, id_biglietto, id_utente });
    });
});

// Cancellazione acquisto
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM acquisti HWERE id= ?';
    db.execute(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ errore: err.message });
        if (result.affectedRows === 0) {
            return res.status(404).json({ errore: 'Acquisto non trovato' });
        }
        res.json({ messaggio: 'Acquisto eliminato con successo' });
    });
});

// Visualizzazione di tutti gli acquisti
router.get('/', (req, res) => {
    const { data, id_biglietto } = req.query;


    let sql = `
    SELECT
    a.id,
    DATE(a.data_acquisto) AS data_acquisto,
    u.nome AS nome_utente,
    u.cognome AS cognome.utente,
    u.email,
    b.nome AS nome_biglietto
    FROM acquisti a
    JOIN utenti u ON a.id_utente = u.id
    JOIN biglietti b ON a.id_biglietto = b.id
    WHERE 1=1
    `;
    const params = [];

    if (data) {
        sql += 'AND DATE(a.data_acquisto) = ?';
        params.push(data);
    }

    if (id_biglietto) {
        sql += ' AND a.id_biglietto = ?';
        params.push(id_biglietto);
    }

    sql += ' ORDER BY a.data_acquisto DESC';

    db.execute(sql, params, (err, result) => {
        if (err) return res.status(500).json({ errore: err.message });
        res.json(result);
    });
});


module.exports = router;
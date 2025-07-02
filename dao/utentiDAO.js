const db = require('../db');

const utentiDAO = {
    getAll({ limit = 10, offset = 0 }, callback) {
        const sql = 'SELECT * FROM utenti LIMIT ? OFFSET ?';
        db.execute(sql, [parseInt(limit), parseInt(offset)], callback);
    },

    create({ nome, cognome, email }, callback) {
        const sql = 'INSERT INTO utenti (nome, cognome, email) VALUES (?, ?, ?)';
        db.execute(sql, [nome, cognome, email], callback);
    },

    update(id, { nome, cognome, email }, callback) {
        const sql = 'UPDATE utenti SET nome = ?, cognome = ?, email = ? WHERE id = ?';
        db.execute(sql, [nome, cognome, email, id], callback);
    },

    delete(id, callback) {
        const sql = 'DELETE FROM utenti WHERE id = ?';
        db.execute(sql, [id], callback);
    }
};

module.exports = utentiDAO;
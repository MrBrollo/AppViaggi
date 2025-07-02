const db = require('../db');

const bigliettiDAO = {
    getAll(callback) {
        const sql = 'SELECT * FROM biglietti';
        db.execute(sql, [], callback);
    },

    create({ nome }, callback) {
        const sql = 'INSERT INTO biglietti (nome) VALUES (?)';
        db.execute(sql, [nome], callback);
    },

    update(id, { nome }, callback) {
        const sql = 'UPDATE biglietti SET nome = ? WHERE id = ?';
        db.execute(sql, [nome, id], callback);
    },

    delete(id, callback) {
        const sql = 'DELETE FROM biglietti WHERE id = ?';
        db.execute(sql, [id], callback);
    }
};

module.exports = bigliettiDAO;
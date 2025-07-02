const db = require('../db');

const acquistiDAO = {
    getAll({ data, id_biglietto }, callback) {
        let sql = `
        SELECT
            a.id,
            DATE(a.data_acquisto) AS data_acquisto,
            u.nome AS nome_utente,
            u.cognome AS cognome_utente,
            u.email,
            b.nome AS nome_biglietto
        FROM acquisti a
        JOIN utenti u ON a.id_utente = u.id
        JOIN biglietti b ON a.id_biglietto = b.id
        WHERE 1=1
        `;
        const params = [];

        if (data) {
            sql += ' AND DATE(a.data_acquisto) = ?';
            params.push(data);
        }

        if (id_biglietto) {
            sql += ' AND a.id_biglietto = ?';
            params.push(id_biglietto);
        }

        sql += ' ORDER BY a.data_acquisto DESC';

        db.execute(sql, params, callback);
    },

    create({ id_biglietto, id_utente }, callback) {
        const sql = `
        INSERT INTO acquisti (id_biglietto, id_utente, data_acquisto)
        VALUES (?, ?, CURRENT_DATE())
        `;
        db.execute(sql, [id_biglietto, id_utente], callback);
    },

    update(id, { id_biglietto, id_utente }, callback) {
        const sql = `
        UPDATE acquisti SET id_biglietto = ?, id_utente = ?
        WHERE id = ?
        `;
        db.execute(sql, [id_biglietto, id_utente, id], callback);
    },

    delete(id, callback) {
        const sql = 'DELETE FROM acquisti WHERE id = ?';
        db.execute(sql, [id], callback);
    }
};

module.exports = acquistiDAO;
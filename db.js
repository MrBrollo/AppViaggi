const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'orizon_viaggi'
});

//connessione al database
db.connect((err) => {
    if (err) {
        console.error('Errore di connessione:', err);
        return;
    }
    console.log('Connesso al database MySQL');
});

module.exports = db;
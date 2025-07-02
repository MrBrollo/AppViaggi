const express = require('express');
const app = express();
const port = 3000;

const db = require('./db'); //connessione a MySQL

//middleware per il parsing JSON
app.use(express.json());

// Importazione delle routes
const bigliettiRoutes = require('./routes/biglietti');
const utentiRoutes = require('./routes/utenti');
const acquistiRoutes = require('./routes/acquisti');

// Associazione delle routes
app.use('/api/biglietti', bigliettiRoutes);
app.use('/api/utenti', utentiRoutes);
app.use('/api/acquisti', acquistiRoutes);

db.getConnection((err, connection) => {
    if (err) {
        console.error('Errore di connessione al database:', err.message);
        process.exit(1); //questo termina il processo in caso di errore
    }

    console.log('Connesso al database MySQL');
    connection.release(); //rilascia la connessione al pool

    app.listen(port, () => {
        console.log(`Server in ascolto su http://localhost:${port}`);
    });
});
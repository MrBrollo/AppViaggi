const express = require('express');
const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
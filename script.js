const express = require('express');
const app = express();
const port = 3000;

const bigliettiRoutes = require('./routes/biglietti');
const utentiRoutes = require('./routes/utenti');
const acquistiRoutes = require('./routes/acquisti');

app.use(express.json());
app.use('/api/biglietti', bigliettiRoutes);
app.use('/api/utenti', utentiRoutes);
app.use('/api/acquisti', acquistiRoutes);

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
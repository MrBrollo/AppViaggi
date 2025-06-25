# 🌍 API RESTful per Gestione Viaggi

Questo progetto è un backend sviluppato in **Node.js** con **Express.js** e **MySQL** per la gestione di un'applicazione di viaggi. Il sistema espone delle API RESTful per gestire biglietti, utenti e acquisti.

## 🚀 Tecnologie utilizzate

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [MySQL Workbench](https://www.mysql.com/products/workbench/) (per gestire il database)

## 📦 Installazione

1. Clona il repository:

```bash
git clone https://github.com/MrBrollo/AppViaggi.git
```
```bash
cd AppViaggi
```

2. Installa le dependencies

```bash
npm install
```

3. Configura il file .env

```bash
DB_HOST=localhost
DB_USER=tuo_utente
DB_PASSWORD=tua_password
DB_NAME=orizon_viaggi
```

4. Crea il database eseguendo il file "migrations.sql" con MySQL Workbench

```bash
source migrations.sql
```

5. Avvia il server
```bash
Node script.js
```
## 📘 Endpoints disponibili

### 🎫 Biglietti
* POST /api/biglietti — Crea un nuovo biglietto
* PUT /api/biglietti/:id — Modifica un biglietto esistente
* DELETE /api/biglietti/:id — Elimina un biglietto

### 👤 Utenti
* POST /api/utenti — Crea un nuovo utente
* PUT /api/utenti/:id — Modifica un utente esistente
* DELETE /api/utenti/:id — Elimina un utente

### 🧾 Acquisti
* POST /api/acquisti — Registra un nuovo acquisto
* PUT /api/acquisti/:id — Modifica un acquisto
* DELETE /api/acquisti/:id — Elimina un acquisto
* GET /api/acquisti — Visualizza tutti gli acquisti

### Parametri di filtro supportati:
* data — Filtra per data (es: ?data=2025-06-25)
* id_biglietto — Filtra per biglietto (es: ?id_biglietto=2)

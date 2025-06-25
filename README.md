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

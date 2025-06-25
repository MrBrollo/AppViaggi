-- Creazione del database
CREATE DATABASE IF NOT EXISTS orizon_viaggi;
USE orizon_viaggi;
-- Creazione della tabella 'biglietti'
CREATE TABLE IF NOT EXISTS biglietti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);
-- Creazione della tabella 'utenti'
CREATE TABLE IF NOT EXISTS utenti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cognome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);
-- Creazione della tabella 'acquisti'
CREATE TABLE IF NOT EXISTS acquisti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_biglietto INT NOT NULL,
    id_utente INT NOT NULL,
    data_acquisto DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (id_biglietto) REFERENCES biglietti(id) ON DELETE CASCADE,
    FOREIGN KEY (id_utente) REFERENCES utenti(id) ON DELETE CASCADE
);
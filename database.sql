CREATE DATABASE CRUD;

USE CRUD;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') NOT NULL
);

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

//crie a tabela produtos com os campos id, nome, descricao e preco
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vcompra REAL NOT NULL,
    vvenda REAL NOT NULL,
    refrig BOOLEAN NOT NULL,
    descricao VARCHAR (50) NOT NULL,
    nome VARCHAR (30) NOT NULL,
    lote INT NOT NULL,
    datavali DATE NOT NULL,
    marca VARCHAR (30) NOT NULL,
    indicacao VARCHAR (50) NOT NULL,
    restricoes VARCHAR (100) NOT NULL,
    quantidade INT NOT NULL,
    observacoes VARCHAR (150) NOT NULL,
    foto BLOB NOT NULL,
);

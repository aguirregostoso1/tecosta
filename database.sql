CREATE DATABASE TECOSTA;

USE TECOSTA;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vcompra REAL NOT NULL,
    vvenda REAL NOT NULL,
    refrig BOOLEAN NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    nome VARCHAR(30) NOT NULL,
    lote INT NOT NULL,
    datavali DATE NOT NULL,
    marca VARCHAR(30) NOT NULL,
    indicacao VARCHAR(50) NOT NULL,
    restricoes VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    observacoes VARCHAR(150) NOT NULL,
    foto BLOB NOT NULL
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    datanasc DATE NOT NULL,
    fone VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf CHAR(14) NOT NULL,
    datanasc DATE NOT NULL,
    rua VARCHAR(50) NOT NULL,
    numero INT NOT NULL,
    bairro VARCHAR(30) NOT NULL,
    cidade VARCHAR(40) NOT NULL,
    genero VARCHAR(15) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    cep CHAR(9) NOT NULL,
);

CREATE TABLE atendimento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dia DATE NOT NULL,
    hora TIME NOT NULL,
    motivo VARCHAR(100) NOT NULL,
    procedimento VARCHAR(100) NOT NULL,
    vcobrado REAL NOT NULL,
    formapag VARCHAR(30) NOT NULL,
    codprof INT NOT NULL, 
    FOREIGN KEY (codprof) REFERENCES usuarios(id) 
);

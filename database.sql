CREATE DATABASE CRUD;

USE CRUD;

CREATE TABLE
    produtos (
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
        foto BLOB NOT NULL,
    );

CREATE TABLE
    usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        datanasc DATE NOT NULL,
        fone int not null,
        email VARCHAR(50) not null,
        especializacao varchar(30) not null
    );

CREATE TABLE
    clientes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(50) NOT NULL,
        cpf char(14) NOT NULL,
        datanasc DATE NOT NULL,
        codgenero int NOT NULL,
        rua VARCHAR(50) NOT NULL,
        numero int NOT NULL,
        bairro VARCHAR(30) NOT NULL,
        cidade VARCHAR(40) NOT NULL,
        genero varchar(15) NOT NULL
        uf VARCHAR(2) not null,
        cep char(9) NOT NULL codatend int not null
    );

CREATE TABLE
    atendimento (
        id INT AUTO_INCREMENT PRIMARY KEY,
        dia DATE NOT NULL,
        hora time NOT NULL,
        motivo varchar(100) not null,
        procedimento varchar(100) not null,
        vcobrado REAL NOT NULL,
        formapag varchar(30) not null,
        codprof foreign KEY int not null,
    );
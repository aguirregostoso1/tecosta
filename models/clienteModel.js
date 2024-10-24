const db = require('../config/db');

const Cliente = {
    create: (cliente, callback) => {
        const query = 'INSERT INTO cliente (nome, cpf, datanasc, codgenero, endereco, codatend) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [cliente.nome, cliente.cpf, cliente.datanasc, cliente.codgenero, cliente.endereco, cliente.codatend], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM cliente WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, cliente, callback) => {
        const query = 'UPDATE cliente SET nome = ?, cpf = ?, datanasc = ?, codgenero = ?, endereco = ?, codatend = ? WHERE id = ?';
        db.query(query, [cliente.nome, cliente.cpf, cliente.datanasc, cliente.codgenero, cliente.endereco, cliente.codatend, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM cliente WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM cliente';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    searchByName: (name, callback) => {
        const query = 'SELECT * FROM cliente WHERE nome LIKE ?';
        db.query(query, [`%${name}%`], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};

module.exports = Cliente;

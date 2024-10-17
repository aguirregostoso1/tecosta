const db = require('../config/db');

const ENDERECO = {
    create: (user, callback) => {
        const query = 'INSERT INTO users (descricao, codatend, codproduto) VALUES (?, ?, ?)';
        db.query(query, [ENDERECO.rua, ENDERECO.numero, ENDERECO.bairro, ENDERECO.cidade, ENDERECO.uf, ENDERECO.cep,], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

 


    update: (id, user, callback) => {
        const query = 'INSERT INTO users (descricao, codatend, codproduto) VALUES (?, ?, ?)';
        db.query(query, [ENDERECO.rua, ENDERECO.numero, ENDERECO.bairro, ENDERECO.cidade, ENDERECO.uf, ENDERECO.cep,], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM users WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM users';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    searchByName: (name, callback) => {
        const query = 'SELECT * FROM users WHERE username LIKE ?';
        db.query(query, [`%${name}%`], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },    
};

module.exports = ENDERECO;
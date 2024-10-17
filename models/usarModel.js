const db = require('../config/db');

const usar = {
    create: (usar, callback) => {
        const query = 'INSERT INTO usars (descricao, codatend, codproduto) VALUES (?, ?, ?)';
        db.query(query, [usar.descricao, usar.codatend, usar.codproduto], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM usars WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },


    update: (id, usar, callback) => {
        const query = 'INSERT INTO usars (descricao, codatend, codproduto) VALUES (?, ?, ?)';
        db.query(query, [usar.descricao, usar.codatend, usar.codproduto, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM usars WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM usars';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    searchByName: (name, callback) => {
        const query = 'SELECT * FROM usars WHERE usarname LIKE ?';
        db.query(query, [`%${name}%`], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },    
};

module.exports = usar;

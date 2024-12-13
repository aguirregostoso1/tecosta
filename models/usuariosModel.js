const db = require('../config/database');

const usuarios = {
    create: (userData, callback) => {
        if (!userData.nome || !userData.datanasc || !userData.fone || !userData.email || !userData.senha) {
            return callback(new Error('Todos os campos são obrigatórios.'));
        }
    
        const sql = `INSERT INTO usuarios (nome, datanasc, fone, email, senha) VALUES (?, ?, ?, ?, ?)`;
    
        db.query(sql, [userData.nome, userData.datanasc, userData.fone, userData.email, userData.senha], (err, results) => {
            if (err) {
                console.error('Erro no SQL:', err.sqlMessage);
                console.error('Consulta SQL:', sql);
                console.error('Parâmetros:', [userData.nome, userData.datanasc, userData.fone, userData.email, userData.senha]);
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },    
    
    findById: (id, callback) => {
        const query = 'SELECT * FROM usuarios WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, usuarios, callback) => {
        const query = 'UPDATE usuarios SET nome = ?, datanasc = ?, fone = ?, email = ? WHERE id = ?';
        db.query(query, [usuarios.nome, usuarios.fone, usuarios.email, usuarios.datanasc], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM usuarios WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM usuarios';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    searchByName: (name, callback) => {
        const query = 'SELECT * FROM usuarios WHERE nome LIKE ?';
        db.query(query, [`%${name}%`], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};

module.exports = usuarios;


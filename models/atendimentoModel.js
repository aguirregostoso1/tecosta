const db = require('../config/db');

const Atendimento = {
    create: (atendimento, callback) => {
        const query = 'INSERT INTO atendimento (dia, hora, motivo, procedimento, vcobrado, formapag, codprof) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [atendimento.dia, atendimento.hora, atendimento.motivo, atendimento.procedimento, atendimento.vcobrado, atendimento.formapag, atendimento.codprof], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM atendimento WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, atendimento, callback) => {
        const query = 'UPDATE atendimento SET dia = ?, hora = ?, motivo = ?, procedimento = ?, vcobrado = ?, formapag = ?, codprof = ? WHERE id = ?';
        db.query(query, [atendimento.dia, atendimento.hora, atendimento.motivo, atendimento.procedimento, atendimento.vcobrado, atendimento.formapag, atendimento.codprof, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM atendimento WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM atendimento';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    searchByName: (name, callback) => {
        const query = 'SELECT * FROM atendimento WHERE motivo LIKE ?';
        db.query(query, [`%${name}%`], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};

module.exports = Atendimento;

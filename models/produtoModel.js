const db = require('../config/database');

const Produto = {
    create: (produto, callback) => {
        const query = 'INSERT INTO produtos (vcompra, vvenda, refrig, descricao, nome, lote, datavali, marca, indicacao,  restricoes, quantidade,  observacoes, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [produto.vcompra, produto.vvenda, produto.refrig, produto.descricao, produto.nome, produto.lote, produto.datavali, produto.marca, produto.indicacao, produto.restricoes, produto.quantidade, produto.observacoes, produto.foto], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT produtos.* FROM produtos WHERE produtos.id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, produto, callback) => {
        const query = 'UPDATE produtos SET vcompra = ?, vvenda = ?, refrig = ?, descricao = ?, nome = ?, lote = ?, datavali = ?, marca = ?, indicacao = ?, restricoes = ?, quantidade = ?, observacoes = ?, foto = ?  WHERE id = ?';
        db.query(query, [produto.vcompra, produto.vvenda, produto.refrig, produto.descricao, produto.nome, produto.lote, produto.datavali, produto.marca, produto.indicacao, produto.restricoes, produto.quantidade, produto.observacoes, produto.foto], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM produtos WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM produtos';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
    
};

module.exports = Produto;
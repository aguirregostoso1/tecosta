const usuarios = require('../models/usuariosModel');

const authController = {
  login: async (req, res) => {
    const { email, senha } = req.body;
    try {
      const user = await User.findOne({ where: { email } });

      if (!user || user.senha !== senha) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      req.session.userId = user.id;
      req.session.userName = user.nome;
      req.session.nome = user;

      res.status(200).json({ message: 'Login bem-sucedido' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  cadastro: async (req, res) => {
    const { nome, datanasc, fone, email, senha } = req.body;

    const formatarData = (data) => {
      const date = new Date(data);
      const ano = date.getFullYear();
      const mes = String(date.getMonth() + 1).padStart(2, '0');
      const dia = String(date.getDate()).padStart(2, '0');
      return `${ano}-${mes}-${dia}`;
    };

    const datanascFormatada = formatarData(datanasc);

    const newUser = { nome, datanasc: datanascFormatada, fone, email, senha };

    try {
      usuarios.create(newUser, (err, insertId) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        req.session.userId = insertId;
        req.session.userName = newUser.nome;

        res.status(201).json({ id: insertId, ...newUser });
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Logout realizado com sucesso' });
    });
  },

  checkSession: (req, res) => {
    if (req.session && req.session.userId) {
      res.status(200).json({
        isAuthenticated: true,
        userId: req.session.userId,
        userName: req.session.userName,
      });
    } else {
      res.status(200).json({ isAuthenticated: false });
    }
  },
};

module.exports = authController;

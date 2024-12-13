const requireAuth = (req, res, next) => {
    if (req.session && req.session.userId) {
      return next();
    }
    return res.status(401).json({ message: 'Usuário não autenticado' });
  };
  
module.exports = requireAuth;
  
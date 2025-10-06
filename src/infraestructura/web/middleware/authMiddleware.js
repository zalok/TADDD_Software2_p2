// src/infrastructure/web/middleware/authMiddleware.js
const jwtAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            error: 'Token de autenticación requerido'
        });
    }

    const token = authHeader.split(' ')[1];

    if (token !== 'secreto123') {
        return res.status(401).json({
            success: false,
            error: 'Token inválido'
        });
    }

    next();
};

module.exports = { jwtAuth };
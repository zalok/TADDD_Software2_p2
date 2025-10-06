// src/infrastructure/web/middleware/authMiddleware.js
const jwtAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            error: 'Token de autenticación requerido'
        });
    }
    const tokenPrivate = process.env.SECRET

    const token = authHeader.split(' ')[1];

    if (token !== tokenPrivate) {
        return res.status(401).json({
            success: false,
            error: 'Error de servidor'
        });
    }

    next();
};

module.exports = { jwtAuth };
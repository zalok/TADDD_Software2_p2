// src/infrastructure/web/routes/medicamentoRoutes.js
const express = require('express');
const { jwtAuth } = require('../middleware/authMiddleware');

function createMedicamentoRoutes(medicamentoController) {
    const router = express.Router();

    // GET /medicamentos - Obtener todos los medicamentos
    router.get('/', medicamentoController.obtenerTodosLosMedicamentos.bind(medicamentoController));

    // GET /medicamentos/:id - Obtener medicamento por ID
    router.get('/:id', medicamentoController.obtenerMedicamento.bind(medicamentoController));

    // POST /medicamentos - Crear nuevo medicamento (protegido con JWT)
    router.post('/', jwtAuth, medicamentoController.crearMedicamento.bind(medicamentoController));

   // PUT ahora llama a reemplazarMedicamento
   router.put('/:id', jwtAuth, medicamentoController.reemplazarMedicamento.bind(medicamentoController));

   // AÑADE ESTA RUTA PATCH para llamar a actualizarMedicamento
   router.patch('/:id', jwtAuth, medicamentoController.actualizarMedicamento.bind(medicamentoController));

   // DELETE /medicamentos/:id - Eliminar medicamento
   router.delete('/:id', jwtAuth, medicamentoController.eliminarMedicamento.bind(medicamentoController));

    // GET /medicamentos/buscar/principio/:principio - Buscar por principio activo
    router.get('/buscar/principio/:principio', medicamentoController.buscarPorPrincipioActivo.bind(medicamentoController));

    // GET /medicamentos/buscar/categoria/:categoria - Buscar por categoría
    router.get('/buscar/categoria/:categoria', medicamentoController.buscarPorCategoria.bind(medicamentoController));

    return router;
}

module.exports = createMedicamentoRoutes;
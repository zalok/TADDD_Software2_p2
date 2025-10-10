class MedicamentoController {
    constructor(medicamentoService) {
        this.medicamentoService = medicamentoService;
    }

    async crearMedicamento(req, res) {
        try {
            const medicamento = await this.medicamentoService.crearMedicamento(req.body);
            res.status(201).json({
                success: true,
                data: medicamento.toObject()
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    async obtenerMedicamento(req, res) {
        try {
            const { id } = req.params;
            const medicamento = await this.medicamentoService.obtenerMedicamento(id);

            if (!medicamento) {
                return res.status(404).json({
                    success: false,
                    error: 'Medicamento no encontrado'
                });
            }

            res.json({
                success: true,
                data: medicamento.toObject()
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    async obtenerTodosLosMedicamentos(req, res) {
        try {
            const medicamentos = await this.medicamentoService.obtenerTodosLosMedicamentos();
            res.json({
                success: true,
                data: medicamentos.map(med => med.toObject())
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    async actualizarMedicamento(req, res) {
        try {
            const { id } = req.params;
            const medicamento = await this.medicamentoService.actualizarMedicamento(id, req.body);

            if (!medicamento) {
                return res.status(404).json({
                    success: false,
                    error: 'Medicamento no encontrado'
                });
            }

            res.json({
                success: true,
                data: medicamento.toObject()
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    async reemplazarMedicamento(req, res) {
        try {
            const { id } = req.params;
            const medicamento = await this.medicamentoService.reemplazarMedicamento(id, req.body);

            if (!medicamento) {
                return res.status(404).json({
                    success: false,
                    error: 'Medicamento no encontrado'
                });
            }

            res.json({
                success: true,
                data: medicamento.toObject()
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    async eliminarMedicamento(req, res) {
        try {
            const { id } = req.params;
            const eliminado = await this.medicamentoService.eliminarMedicamento(id);

            if (!eliminado) {
                return res.status(404).json({
                    success: false,
                    error: 'Medicamento no encontrado'
                });
            }

            res.json({
                success: true,
                message: 'Medicamento eliminado correctamente'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    async buscarPorPrincipioActivo(req, res) {
        try {
            const { principio } = req.params;
            const medicamentos = await this.medicamentoService.buscarPorPrincipioActivo(principio);
            
            res.json({
                success: true,
                data: medicamentos.map(med => med.toObject())
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    async buscarPorCategoria(req, res) {
        try {
            const { categoria } = req.params;
            const medicamentos = await this.medicamentoService.buscarPorCategoria(categoria);
            
            res.json({
                success: true,
                data: medicamentos.map(med => med.toObject())
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
}

module.exports = MedicamentoController;
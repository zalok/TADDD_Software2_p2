// src/application/services/medicamentoService.js
// trae medicamento
const Medicamento = require('../../dominio/entidades/medicamento');5
class MedicamentoService {
    constructor(medicamentoRepository) {
        this.medicamentoRepository = medicamentoRepository;
    }

    async crearMedicamento(medicamentoData) {
        const medicamento = Medicamento.fromObject(medicamentoData);
        return await this.medicamentoRepository.save(medicamento);
    }

    async obtenerMedicamento(id) {
        return await this.medicamentoRepository.findById(id);
    }

    async obtenerTodosLosMedicamentos() {
        return await this.medicamentoRepository.findAll();
    }

    async actualizarMedicamento(id, medicamentoData) {
        const medicamentoExistente = await this.medicamentoRepository.findById(id);
        if (!medicamentoExistente) {
            return null;
        }

        const medicamentoActualizado = Medicamento.fromObject({
            ...medicamentoExistente.toObject(),
            ...medicamentoData,
            _id: id
        });

        return await this.medicamentoRepository.update(id, medicamentoActualizado);
    }

    async eliminarMedicamento(id) {
        return await this.medicamentoRepository.delete(id);
    }

    async buscarPorPrincipioActivo(principioActivo) {
        return await this.medicamentoRepository.findByPrincipioActivo(principioActivo);
    }

    async buscarPorCategoria(categoria) {
        return await this.medicamentoRepository.findByCategoria(categoria);
    }
}

module.exports = MedicamentoService;
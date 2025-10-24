const Medicamento = require('../../dominio/entidades/medicamento');

class MedicamentoService {
    constructor(medicamentoRepository) {
        this.medicamentoRepository = medicamentoRepository;
    }

    async crearMedicamento(medicamentoData) {
        const dataConAuditoria = {
            ...medicamentoData,
            fechaCreacion: new Date(),
            fechaActualizacion: new Date(),
            eliminado: false,
            fechaEliminacion: null
        };

        const medicamento = Medicamento.fromObject(dataConAuditoria);
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
            _id: id,
            fechaActualizacion: new Date()
        });

        return await this.medicamentoRepository.update(id, medicamentoActualizado);
    }

    async reemplazarMedicamento(id, medicamentoData) {
        const medicamentoExistente = await this.medicamentoRepository.findById(id);
        if (!medicamentoExistente) {
            return null;
        }

        const medicamentoReemplazado = Medicamento.fromObject({
            _id: id, 
            ...medicamentoData,
            fechaCreacion: medicamentoExistente.fechaCreacion, 
            fechaActualizacion: new Date(),
            eliminado: false,
            fechaEliminacion: null
        });

        return await this.medicamentoRepository.update(id, medicamentoReemplazado);
    }

    async eliminarMedicamento(id) {
        const medicamentoExistente = await this.medicamentoRepository.findById(id);
        if (!medicamentoExistente) {
            return null; 
        }

        medicamentoExistente.eliminado = true;
        medicamentoExistente.fechaEliminacion = new Date();
        medicamentoExistente.fechaActualizacion = new Date(); 

        const resultado = await this.medicamentoRepository.update(id, medicamentoExistente);
        
        return resultado !== null; 
    }

    async buscarPorPrincipioActivo(principioActivo) {
        return await this.medicamentoRepository.findByPrincipioActivo(principioActivo);
    }

    async buscarPorCategoria(categoria) {
        return await this.medicamentoRepository.findByCategoria(categoria);
    }

    async obtenerMedicamentosEliminados() {
        return await this.medicamentoRepository.findAllEliminados();
    }
}

module.exports = MedicamentoService;
class Medicamento {
    constructor({
        _id = null,
        principio_activo,
        forma,
        categoria,
        es_controlado,
        requiere_receta,
        via_administracion,
        alternativas = [],
        fechaCreacion = null,
        fechaActualizacion = null,
        eliminado = false,
        fechaEliminacion = null
    }) {
        this._id = _id;
        this.principio_activo = principio_activo;
        this.forma = forma;
        this.categoria = categoria;
        this.es_controlado = es_controlado;
        this.requiere_receta = requiere_receta;
        this.via_administracion = via_administracion;
        this.alternativas = alternativas;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.eliminado = eliminado;
        this.fechaEliminacion = fechaEliminacion;
    }

    static fromObject(data) {
        return new Medicamento({
            _id: data._id,
            principio_activo: data.principio_activo,
            forma: data.forma,
            categoria: data.categoria,
            es_controlado: data.es_controlado,
            requiere_receta: data.requiere_receta,
            via_administracion: data.via_administracion,
            alternativas: data.alternativas || [],
            fechaCreacion: data.fechaCreacion,
            fechaActualizacion: data.fechaActualizacion,
            eliminado: data.eliminado,
            fechaEliminacion: data.fechaEliminacion
        });
    }

    toObject() {
        return {
            _id: this._id,
            principio_activo: this.principio_activo,
            forma: this.forma,
            categoria: this.categoria,
            es_controlado: this.es_controlado,
            requiere_receta: this.requiere_receta,
            via_administracion: this.via_administracion,
            alternativas: this.alternativas,
            fechaCreacion: this.fechaCreacion,
            fechaActualizacion: this.fechaActualizacion,
            eliminado: this.eliminado,
            fechaEliminacion: this.fechaEliminacion
        };
    }
}

module.exports = Medicamento;
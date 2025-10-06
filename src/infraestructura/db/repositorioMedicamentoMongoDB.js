// src/infrastructure/database/mongoRepositorioMedicamento.js
const { ObjectId } = require('mongodb');
const RepositorioMedicamento = require('../../dominio/repositorio/repositorioMedicamento');
const Medicamento = require('../../dominio/entidades/medicamento');

class MongoRepositorioMedicamento extends RepositorioMedicamento {
    constructor(database) {
        super();
        this.collection = database.collection('medicamentos');
    }

    async save(medicamento) {
        const medicamentoData = medicamento.toObject();
        delete medicamentoData._id;

        const result = await this.collection.insertOne(medicamentoData);
        return Medicamento.fromObject({
            _id: result.insertedId,
            ...medicamentoData
        });
    }

    async findById(id) {
        const objectId = new ObjectId(id);
        const result = await this.collection.findOne({ _id: objectId });
        return result ? Medicamento.fromObject(result) : null;
    }

    async findAll() {
        const results = await this.collection.find({}).toArray();
        return results.map(med => Medicamento.fromObject(med));
    }

    async update(id, medicamento) {
        const objectId = new ObjectId(id);
        const medicamentoData = medicamento.toObject();
        delete medicamentoData._id;

        const result = await this.collection.updateOne(
            { _id: objectId },
            { $set: medicamentoData }
        );

        if (result.matchedCount === 0) {
            return null;
        }

        return await this.findById(id);
    }

    async delete(id) {
        const objectId = new ObjectId(id);
        const result = await this.collection.deleteOne({ _id: objectId });
        return result.deletedCount > 0;
    }

    async findByPrincipioActivo(principioActivo) {
        const results = await this.collection.find({ 
            principio_activo: new RegExp(principioActivo, 'i') 
        }).toArray();
        return results.map(med => Medicamento.fromObject(med));
    }

    async findByCategoria(categoria) {
        const results = await this.collection.find({ 
            categoria: new RegExp(categoria, 'i') 
        }).toArray();
        return results.map(med => Medicamento.fromObject(med));
    }
}

module.exports = MongoRepositorioMedicamento;
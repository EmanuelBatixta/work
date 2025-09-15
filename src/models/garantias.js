import mongoose from "mongoose"

const garantiaSchema = new mongoose.Schema({
  nome: String,
  chaves: [String], // array de strings, pode estar vazio
  status: {
    type: String,
    enum: ['pendente', 'enviado', 'aprovado', 'recusado'],
    default: 'enviado'
  },
  pago: Boolean
}, { timestamps: true })


const model = mongoose.model('Garantia', garantiaSchema)

const garantia = {}

garantia.create = async (nome, chaves, status, pago) => {
    try{
        const doc = await model.create({nome, chaves, status, pago})
        return doc
    } catch(error) {
        throw new Error("Erro ao criar garantia:" + error.message)
    }
}

garantia.getAll = async () => {
    try{
        const docs = await model.find()
        return docs
    } catch(error) {
        throw new Error("Erro ao buscar garantias:" + error.message);
    }
}

garantia.getById = async (id) => {
    try{
        const doc = await model.findById(id)
        return doc
    } catch(error) {
        throw new Error("Erro ao buscar garantia:" + error.message);
    }
}

garantia.update = async (id, nome, chaves, status, pago) => {
    try{
        const doc = await model.findByIdAndUpdate(id, {nome, chaves, status, pago}, {new: true})
        return doc
    } catch(error) {
        throw new Error("Erro ao atualizar garantia:" + error.message);
    }
}

garantia.delete = async (id) => {
    try{
        const doc = await model.findByIdAndDelete(id)
        return doc
    } catch(error) {
        throw new Error("Erro ao deletar garantia:" + error.message);
    }
}

export default garantia
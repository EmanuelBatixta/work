import garantias from '../models/garantias.js'

const ctrl = {}

ctrl.createGarantia = async (req, res) =>{
    const { nome, chaves, status, pago } = req.body
    const result = await garantias.create(nome, chaves, status, pago)
    if (result) {
        res.status(201).json(result)
    } else {
        res.status(400).json({ error: "Erro ao criar garantia" })
    }
}

ctrl.getGarantias = async (req, res) => {
    const result = await garantias.getAll()
    if (result) {
        res.status(200).json(result)
    } else {
        res.status(400).json({ error: "Erro ao buscar garantias" })
    }
}

ctrl.getGarantiasById = async (req, res) => {
    const { id } = req.params
    const result = await garantias.getById(id)
    if (result ) {
        res.status(200).json(result)
    } else {
        res.status(404).json({ error: "Garantia não encontrada" })
    }
}

ctrl.updateGarantias = async (req, res) => {
    const { id } = req.params
    const { nome, chaves, status, pago } = req.body
    const result = await garantias.update(id, nome, chaves, status, pago)
    if (result) {
        res.status(200).json(result)
    } else {
        res.status(400).json({ error: "Erro ao atualizar garantia" })
    }
}

ctrl.deleteGarantias = async (req, res) => {
    const { id } = req.params
    const result = await garantias.delete(id)
    if (result) {
        res.status(200).json({ message: "Garantia deletada com sucesso" })
    } else {
        res.status(400).json({ error: "Erro ao deletar garantia" })
    }
}

export default ctrl
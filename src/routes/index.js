import { Router } from 'express'


const main = Router()

main.get('/', async (req, res) => {
    res.render('index.html',{
        message: 'Esta rodando'
    })
})

export default main
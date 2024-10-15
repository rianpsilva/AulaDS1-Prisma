const express =require('express')
const funcionarioController =require('../controllers/funcionario_controller')

const router = express.Router()
router.get('/funcionarios', funcionarioController.listarFuncionarios)
router.post('/funcionario',funcionarioController.inserirFuncionarios)
router.delete('/funcionario/:id', funcionarioController.deletarFuncionario)
router.put('/funcionario/:id', funcionarioController.atualizarFuncionario)
module.exports = router
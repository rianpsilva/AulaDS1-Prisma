const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

module.exports = {
    async listarFuncionarios(req,res){
        try{
            const funcionarios = await prisma.funcionario.findMany();
            res.status(200).json(funcionarios);
        }catch(error){
            res.status(500).json({message: "Erro ao listar os funcionarios."} );
        }
    },

    async inserirFuncionarios(req,res){
        try{
            const {
                matricula, nome, email,salario_bruto
            } = req.body;
            
            const novoFuncionario = await prisma.funcionario.create({
                data: {
                    matricula, nome, email, salario_bruto
                }
            })
            res.status(201).json(novoFuncionario)

        }catch(error){
            res.status(500).json({message: "Erro ao criar os funcionarios."} );
        }
    },

    async deletarFuncionario(req,res){
        try{
            const { id } = req.params;
            await prisma.funcionario.delete(
                {
                    where: {
                        id: Number(id)
                    }
                }
            )
                res.status(204).json({message: "Deleção bem deletada"})
        }catch(error){
            res.status(500).json({message: "Erro ao remover o funcionario."} );
        }
    },

    async atualizarFuncionario(req,res){
        try{
            const { id } =req.params;
            const { matricula, nome, email, salario_bruto }= req.body;
            const funcionario = await prisma.funcionario.update(
                {
                    where:{ id: Number(id) },
                    data: {
                        matricula,
                        nome,
                        email,
                        salario_bruto
                    }

                }
            )
            res.status(202).json({message: "Edição bem editada"})

        }catch(error){
            res.status(500).json({message: "Erro ao atualizar o funcionario."} );
        }
    }

}//module.exports
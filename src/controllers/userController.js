const User = require("../model/user");

const userController = {
    create: async (request, response) => {
        try{

            const { nome, email, senha } = request.body;

            const userCriado = await User.create({ nome, email, senha });

            return response.status(201).json({
                msg: "O usuário foi criado com sucesso",
                userCriado
            }); 
        }catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro ao acessar a API"
            })
        }
    },
    update: async (request, response) => {
        try {
            const { id } = request.params;
            const { nome, email, senha } = request.body;
            
            if(!nome || !email || !senha) {
                return response.status(400).json({
                    msg: "Campos faltando"
                });
            }

            const userExiste = await User.findByPk(id);

            if(!userExiste) {
                return response.status(400).json({
                    msg: "Usuário não encontrado"
                });
            }

            await User.update({
                nome, email, senha
            }, {
                where: {
                    id: id
                }
            });

            return response.status(200).json({
                msg: "Usuário atualizado com sucesso"
            });
        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro ao atualizar o usuário"
            });
        }
    },
    findAll: async (request, response) => {
        try {
            const users = await User.findAll()

            return response.status(200).json(users)
        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao buscar todos os usuários"
            })
        }
    },
    delete: async (request, response) => {
        try {
            const { id } = request.params;

            const existeUser = await User.findByPk(id); 
           
            if (!existeUser) {
                return response.status(400).json({
                    msg: "Usuário não foi encontrado"
                });
            }

            await User.destroy({
                where: {
                    id:id
                }
            });

            return response.status(200).json({
                msg: "Usuário deletado com sucesso!"
            });
        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao deletar o usuário"
            });
        }
    },
    findById: async (request, response) => {
        try{
            
            const { id } = request.params

            const userEncontrado = await User.findByPk(id);

            if (!userEncontrado) {
                
                return response.status(204).json({
                    msg: "Usuário não encontrado"
                });
            }

            return response.status(200).json(userEncontrado);
        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao buscar o usuário único"
            })
        }
    }
}


module.exports = userController;
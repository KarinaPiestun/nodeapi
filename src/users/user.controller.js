const UserService = require('./user.service')

class UserController {
    static findAll (req,res) {
       const users =UserService.findAll()

        res.json (users)  
      }

      static findbyId(req,res){
         const {id} = req.params

         const user =UserService.findById(id)

      res.json(user)
      }

      static create(req,res){
         const newUser ={
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            senha: req.body.senha
         }

         const userSaved =UserService.create(newUser)
         
         res.json(userSaved)
      }

     static update(req,res){
        const {id} = req.params

        const userData ={
         nome: req.body.nome,
         email: req.body.email,
         telefone: req.body.telefone,
         senha: req.body.senha
        }

        const userUpdated = UserService.update(id, userData)

        res.json(userUpdated)
     }

     static remove (req,res) {
        res.json({status:'apaga usuario'})

     }
}

module.exports=UserController
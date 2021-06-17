const {Usuarios} = require('../database/models')

const userList =[
    {
    "id": "1",
   "nome": "joao",
   "email": "jo@email.com",
   "telefone": "(11) 93 347 345",
   "senha": "123Mudar@uol",
   "status": true
  },
  {
    "id": "2",
    "nome": "manolo",
    "email": "xxxa@email.com",
    "telefone": "(11) 984 347 345",
    "senha": "123r@uol",
    "status": true
  }
]

class UserService{
    static findAll(){
        return  Usuarios.findAll()
    }   

    static findById (userId){
    const user = userList.find(user=>user.id =userId)
    
    return user
    }

    static create(userToSave){
        userToSave.id = userList.length + 1
        userToSave.status = true

        userList.push(userToSave)

        return userToSave
    }

    static update (userId, userData) {
        const user = UserService.findById(userId)

        Object.assign(user, userData)

        return user
    }
}

module.exports =UserService
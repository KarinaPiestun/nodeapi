
{
   "id": "1",
  "nome": "Balbina",
  "email": "balbina@email.com",
  "telefone": "(11) 984 347 345",
  "senha": "123Mudar@uol",
  "status": true

}

 - Criar usuário     - [POST]   `/usuarios`
  - Listar usuários   - [GET]    `/usuarios`
  - Busca um usuários - [GET]    `/usuarios/:id`
  - Atualizar usuário - [PUT]    `/usuarios/:id`
  - Apagar usuário    - [DELETE] `/usuarios/:id`
```

 - Criar collections no POSTMAN
 - Criar rotas
 - Criar Controller
 - Criar Service
 - Configurar Sequelize
 - Criar Model do user
 - Implementar Model no service


 router.get('/' , (req,res) =>{
    res.json({status:'lista usuario'})
})


router.get('/:id',(req,res)=>{
    res.json({status:'busca usuario'})
})


router.post('/' ,(req,res)=>{
    res.json({status:'cria usuario'})
})

router.put('/:id' ,(req,res) =>{
    res.json({status:'atualiza usuario'})

    router.delete('/:id' , (req,res) =>{
        res.json({status:'apaga usuario'})
    })
})

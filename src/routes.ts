import express, { request, response } from 'express';
import knex from './database/connection';


const routes = express.Router(); 

routes.post('/users',async(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var login = req.body.login;
    var senha = req.body.senha;
    
    await knex('users').insert({
        name,
        email,
        login,
        senha
    });
    return res.json({message:name})
})

routes.get('/users', async (request,response)=>{
    const users = await knex('users').select('*')
    //Const serialized serve para rodar todo a tabela users e mostrar 1 a 1 os users cadastrados
    const serializedUsers = users.map(users=>{
        return{
            id : users.id,
            name: users.name,
            email: users.email,
            login: users.login,
            senha:users.senha,
        };
    })
    return response.json(serializedUsers);
});

export default routes;

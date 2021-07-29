const db = require('../config/db');

// INSERÇÃO DE PERFIL PADRÃO

// const novoPerfil = {
//     nome: 'cadastrador',
//     rotulo: 'Cadastrador'
// }

// db('perfis').insert(novoPerfil)
//     .then(res => console.log(res))
//     .catch(err => console.log(err.sqlMessage))
//     .finally(() => db.destroy())

const novoPerfil = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuário'
}

// SQL: insert into perfis (nome, rotulo) values (...)
db.insert(novoPerfil).into('perfis')
    .then(res => res[0])
    .then(id => `O código geral foi ${id}`)
    .then(string => console.log(string))
    .catch(err => console.log(err.sqlMessage))
    .finally(() => db.destroy())
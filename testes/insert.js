const db = require('../config/db');

// const novoPerfil = {
//     nome: 'novo',
//     rotulo: 'novo'
// }

// db('perfis').insert(novoPerfil)
//     .then(res => console.log(res))
//     .catch(err => console.log(err.sqlMessage))
//     .finally(() => db.destroy())

const perfilSU = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuário'
}

// db.insert(novoPerfil).into('perfis');

db('perfis').insert(perfilSU)
    .then(res => console.log(res))
    .catch(err => console.log(err.sqlMessage))
    .finally(() => db.destroy())
const db = require('../config/db');

const novoPerfil = {
    nome: 'cadastrador',
    rotulo: 'Cadastrador'
}

db('perfis').insert(novoPerfil)
    .then(res => console.log(res))
    .catch(err => console.log(err.sqlMessage))


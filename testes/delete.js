const db = require('../config/db');

// EXCLUIR POR ID
// db('usuarios')
//     .where({id: 1})
//     .delete()
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

db('perfis')
    .delete()
    .then(res => console.log(res))
    .finally(() => db.destroy())
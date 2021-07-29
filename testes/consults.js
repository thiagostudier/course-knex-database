const db = require('../config/db');

db('perfis')
    // .map(p => p.nome)
    .then(res => res.map(p => p.nome))  //O RESULTADO DE UM "THEN" SERÁ O PARÂMETRO PARA O PRÓXIMO
    .then(nomes => console.log(nomes))
    .finally(() => db.destroy())
    
db('perfis')
    .select('nome', 'id')
    .then(res => console.log(res))
    .finally(() => db.destroy())

db.select('nome', 'id')
    .from('perfis')
    .limit(2)
    .offset(2)
    .then(res => console.log(res))
    .finally(() => db.destroy())

db('perfis')
    // .where({ id: 2 })
    .where( 'id', '=', 2 )
    .first()
    .then(res => console.log(res.nome))
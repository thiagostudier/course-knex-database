const db = require('../config/db');

const novoUsuario = {
    nome: 'Pedro',
    email: 'pedro@mail.com',
    senha: '123456'
}

// async PERMITE USAR O AWAIT
async function exercicio() {
    // CONTADOR
    // qtd ESPERARÁ O RESULTADO DA QUERIE
    const { qtd } = await db('usuarios').count('* as qtd').first();

    // SE NÃO HOUVER DADOS
    if(qtd === 0){
        await db('usuarios').insert(novoUsuario);
    }

    // CONSULTAR
    let { id } = await db('usuarios').select('id').limit(1).first();

    // ALTERAR
    await db('usuarios')
        // .where({ id })
        .where({ id: id })
        .update({ nome: 'Pedro Garcia' })

    return db('usuarios').where({ id })

}

exercicio()
    .then(usuario => console.log(usuario))
    .finally(() => db.destroy());
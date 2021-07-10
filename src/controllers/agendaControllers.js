const contatos = require("../models/agendaModels")

const home = (req, res) =>{
    res.status(200).send({
        "message": "Sejam bem vindos ao meu contatinho"
    })
}

const getAll = (req,res) =>{
    res.status(200).send(contatos)
}

const getContactId = (req,res) =>{
    const requestId = req.params.requestId
    const encontrarNome = contatos.filter(contato => contato.id == requestId)


    res.status(200).send(encontrarNome)
}

const creatContact = (req,res) =>{
    const idRequest = req.body.id
    const nomeRequest = req.body.nome
    const celularRequest = req.body.celular
    const redesRequest = req.body.redesSociais

    const novoContato = {
        id: idRequest,
        nome: nomeRequest,
        celular: celularRequest,
        redesSociais: redesRequest
    }

    contatos.push(novoContato)
    res.status(200).send(novoContato)

}

const deleteContact = (req, res) =>{
    const idRequerido = req.params.id;
    const contatoEncontrado = contatos.find(contato => contato.id == idRequerido);

    const inicio = contatos.indexOf(contatoEncontrado);
    console.log(inicio);

    contatos.splice(inicio, 1);
    res.status(200).send(
    [
        {
            "message": "contitinho rodou com sucesso"
        },
        contatos
    ]
    )
}

module.exports = {
    home,
    getAll,
    getContactId,
    creatContact,
    deleteContact
}

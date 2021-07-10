const express = require("express")
const router = express.Router()

router.get("/",(request, response) => {
    response.status(200).send({
        "titulo": "Chama no contatinho",
        "version": "1.0.0",
        "message": "Aqui não fica ocupadinho <3"

    })
})

module.exports = router 
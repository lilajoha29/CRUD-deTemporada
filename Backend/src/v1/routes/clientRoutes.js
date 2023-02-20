const express = require('express');
const router = express.Router();
const clientController = require("../../controllers/clientController")

router
    //get - traer post put - enviar patch -actualiza
    .get('/', clientController.getAllClients)
    .get('/:clientId', clientController.getOneClient)
    .post('/', clientController.createNewClient)
    .patch('/:clientId', clientController.updateOneClient)
    .delete('/:clientId', clientController.deleteOneClient);

module.exports = router;


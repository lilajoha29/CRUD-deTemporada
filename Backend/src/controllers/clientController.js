const clientService = require("../services/clientService");
const client = require("../models/clientModel");
const bodyParser = require("body-parser");


// const getAllClients = (req, res) => {
//     const allClients = clientService.getAllClients();
//     res.send({ status: "OK", data: allClients });
// };
const getAllClients = (req, res) => {
    client.find((err, result) => { 
        if (err) throw new Error(err);
        res.json(result);
        console.log(result)
    });
    
};


const getOneClient = (req, res) => {
    // const {
    //     params: { clientId },
    // } = req;
    const { clientId } = req.params
    if (!clientId) {
        return;
    }

    // const oneClient = clientService.getOneClient(clientId);
    // res.send({ status: "OK", data: oneClient });

    client.findById(clientId, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
        console.log(result)
    })
};

const createNewClient = (req, res) => {
    const { body } = req;

    if (
        !body.name ||
        !body.contact ||
        !body.address
    ) {
        // return;
        // res.status(400)
        //     .send({
        //         status: "FAILED",
        //         data: {
        //             error: "one of the following keys is missing or is empty in request body: 'name' 'contact' or 'address'"
        //         }
    
        //     });

        const newClient = {
            name: body.name,
            contact: body.contact,
            address: body.address
        };

        const createdClient = clientService.createNewClient(newClient);
        res.status(201).send({ status: "OK", data: createdClient });
    };
};    

const updateOneClient = (req, res) => {
    const {
        body,
        params: { clientId },
    } = req;

    if (!clientId) {
        return;
    }

    const updatedClient = clientService.updateOneClient(clientId, body);
    res.send({ status: "OK", data: updatedClient });
};

const deleteOneClient = (req, res) => {
    const {
        params: { clientId },
    } = req;

    if (!clientId) {
        return;
    }

    clientService.deleteOneClient(clientId);
    res.status(204).send({ status: "OK" });
};

module.exports = {
    getAllClients,
    getOneClient,
    createNewClient,
    updateOneClient,
    deleteOneClient
};
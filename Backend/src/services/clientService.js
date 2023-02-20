const client = require('../databases/client');
const {v4: uuid} = require('uuid');

const getAllClients = () => {
    const allClients = client.getAllClients();
    return allClients;
};

const getOneClient = (clientId) => {
    const oneClient = client.getOneClient(clientId);
    return oneClient;
};
const createNewClient = (newClient) => {
    const clientToInsert = {
        ...newClient,
        clientId: uuid(),
        // createdAt: new Date().toLocaleString("en-US", { timezone: "utc" }),
        // updatedAt: new Date().toLocaleString("en-US", { timezone: "utc" }),
    }
    const createdClient = client.createNewClient(clientToInsert);
    return createdClient;
};
const updateOneClient = (clientId, changes) => {
    const updatedClient = client.updateOneClient(clientId, changes);
    return updatedClient;
};

const deleteOneClient = (clientId) => {
    client.deleteOneClient(clientId);
};

module.exports = {
    getAllClients,
    getOneClient,
    createNewClient,
    updateOneClient,
    deleteOneClient
}

// const DB = require('./db.json')
const {saveToDatabase} = require('./utils')
const DBMongo = require("../models/clientModel");

// const getAllClients = () => {
//     return DB.clients;
// };
const getAllClients = () => {
    return DB.Mongo.clients;
};

// const getOneClients = (clientId) => {
//     const clients = DB.clients.find((clients) => client.id === clientId);
//     if (!clients) {
//         return;
//     }
//     return clients;
// };
const getOneClient = (clientId) => {
    const client = DBMongo.clients.find((client) => client.id === clientId);
    if (!client) {
        return;
    }
    return client;
};

// const createdNewClients = (newClients) => {
//     const isAlreadyAdded = DB.clients.findIndex((clients) => clients.name === newClients.name) > -1;
    

//     if (isAlreadyAdded) {
//         throw {
//             status
//         }
//     }
//     DB.clients.push(newClients);
//     saveToDatabase(DB);
//     return newClients;
// }
const createdNewClient = (newClient) => {
    const isAlreadyAdded = DBMongo.clients.findIndex((client) => client.name === newClient.name) > -1;


    if (isAlreadyAdded) {
        return;
    }
    DBMongo.clients.push(newClient);
    saveToDatabase(DBMongo);
    return newClient;
}



const updateOneClient = (clientId, changes) => {
    const indexForUpdated = DBMongo.clients.findIndex((client) => (client.id === clientId)
    );
    if (indexForUpdated === -1) {
        return;
    }

    const updatedClient = {
        ...DBMongo.clients[indexForUpdated],
        ...changes,
        
    };

    DB.clients[indexForUpdated] = updatedClient;
    saveToDatabase(DB);
    return updatedClient;
};

const deleteOneClient = (clientId) => {
    const indexForDelete = DBMongo.clients.findIndex((client) => client.Id === clientId
    );
    if (indexForDelete === -1) {
        return;
    }
    
    DBMongo.clients.splice(indexForDelete, 1);
    saveToDatabase(DBMongo);

};


module.exports = {
    getAllClients,
    getOneClient,
    createdNewClient,
    updateOneClient,
    deleteOneClient
};

const db = require('../lib/clientModel');

class client{
    constructor() {}

    static getAll(){
const clients = db;
return clients;
    }

    static getOne(id){
        const clientId = 'c'+id;
        const client = db[clientId];
        return {clientId,client};
    }

    static create(data)
    {
        const dbLength = Object.keys(db).length;
        const clientId = 'c'+ (dbLength + 1);
        db[clientId] = data;
        return true; // para avisar que si se creo
    }

    static updateName(id, name)
    {
        const {clientId} = client.getOne(id);
        db[clientId].name = name
        return true;
    }

    static delete(id){
        const {clientId} = client.getOne(id);
        delete db[clientId];
        return true;
    }

    }
    static increaseSpentAmount(id,amount){
        const {clientId} = client.getOne(id);
        db[clientId.amount] += amount;
        return true;
}


module.exports = client;
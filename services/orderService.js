const db = requiere('../lib/oderModel');

class Order{
constructor() {}

getAll()
    {
        const orders= db;
        return orders;
    }

create(data)
    {
            const dbLength= Object.keys(db).length;
            const orderId='o'+(dbLength+1);
            const {clientId, amount} = data;
            db[orderId] = data;
            ClientServices.increaseSpentAmount(clientId, amount);
            return true
    }
}
// Para ejemplos practivos se retorna una instancia, pero no se debe mesclar
module.exports = new Order();


//tema syncwave 86, desctivar neon
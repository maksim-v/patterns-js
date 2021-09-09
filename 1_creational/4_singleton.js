// one instance of one class
class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instance;
        }

        Database.instance = this;
        Database.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const myDb = new Database('MongoDB');
console.log(myDb.getData()); // MongoDB

const mySQL = new Database('My SQL');
console.log(mySQL.getData()); // MongoDB
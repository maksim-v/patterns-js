/*
pattern that allow us to create an instance of some class
 */

// old realization
function Server(name, ip) {
    this.name = name;
    this.ip = ip;
}

Server.prototype.getUrl = function () {
    return `https://${this.ip}:80`;
}

const server = new Server('My Server', '81.21.21.32');
console.log(server.getUrl());

// new realization
class ServerES6 {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}:80`;
    }
}

const serverES6 = new Server('My ES6 Server', '81.21.21.32');
console.log(serverES6.getUrl());
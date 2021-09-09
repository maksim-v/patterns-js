/*
decorator patter gives us possibility to add new behaviour to existing classes
decorator - function that takes class instance, modify and return back
 */

class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https:${this.ip}:${this.port}`;
    }
}

// aws decorator
function aws(server) {
    server.isAWS = true;
    server.awsInfo = function () {
        return server.url;
    }

    return server;
}

// azure decorator
function azure(server) {
    server.isAzure = true;
    server.port += 500;

    return server;
}

const s1 = aws(new Server('12.34.56.78', 8080));
console.log('IS AWS?', s1.isAWS);
console.log('AWS INFO', s1.awsInfo());

const s2 = azure(new Server('12.34.56.78', 8080));
console.log('IS AZURE', s2.isAzure);
console.log('Azure url', s2.url);


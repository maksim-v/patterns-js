/*
    pattern that help us to simply interaction with some functionality
 */

class Complains {
    constructor() {
        this.complainst = [];
    }

    reply(complaint) {

    }

    add(complaint) {
        this.complainst.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplains extends Complains {
    reply({ id, customer, details }) {
        return `Product: ${id}: ${customer} (${details})`;
    }
}

class ServiceComplains extends Complains {
    reply({ id, customer, details }) {
        return `Service: ${id}: ${customer} (${details})`;
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;

        if (type = 'service') {
            complaint = new ServiceComplains();
        } else {
            complaint = new ProductComplains();
        }

        return complaint.add({ id, customer, details });
    }
}

const registry = new ComplaintRegistry();

console.log(registry.register('Maksim', 'service', 'not available'));
console.log(registry.register('Hanna', 'product', 'error appear'));

/*
    creates template
    child classes implements functionality of this template
 */

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} doing ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} has salary ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'Writing code';
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'testing';
    }
}

const dev = new Developer('Maksim', 100000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester('Vicky', 90000);
console.log(tester.getPaid());
console.log(tester.work());
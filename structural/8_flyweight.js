/*
    allow us to effectively pass and work with data thru the different types of object
 */

// for example - loading different images
// browser use flyweight pattern to avoid loading elements that was already loaded
// cache - also an example of flyweight pattern
// memoize - also an example of flyweight pattern

class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    create(model, price) {
        const candidate = this.getCar(model);

        if (candidate) {
            return candidate;
        }

        const newCar = new Car(model, price);
        this.cars.push(newCar);
        return newCar;
    }

    getCar(model) {
        return this.cars.find(car => car.model === model);
    }
}

const factory = new CarFactory();

const bmwx6 = factory.create('bmw', 10000);
console.log(bmwx6);
const audi = factory.create('audi', 12000);
console.log(audi);
const bmwx3 = factory.create('bmw', 8000);
console.log(bmwx3);

console.log('Is the same car? (cached)', bmwx3 === bmwx6);
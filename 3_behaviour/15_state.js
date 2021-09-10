/*
    The State pattern provides state-specific logic to a limited set of objects
    in which each object represents a particular state.

    https://www.dofactory.com/javascript/design-patterns/state
 */

class Light {
    constructor(light) {
        this.light = light;
    }
}

class RedLight extends Light {
    constructor() {
        super('red');
    }

    sign() {
        return 'STOP';
    }
}

class YellowLight extends Light {
    constructor() {
        super('yelloow');
    }

    sign() {
        return 'BE READY';
    }
}

class GreenLight extends Light {
    constructor() {
        super('green');
    }

    sign() {
        return 'GO';
    }
}

class TrafficLight {
    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight(),
        ];

        this.current = this.states[0];
    }

    change() {
        const total = this.states.length;
        let index = this.states.findIndex(light => light === this.current);

        if (index + 1 < total) {
            this.current = this.states[index + 1];
        } else {
            this.current = this.states[0];
        }
    }

    sign() {
        return this.current.sign();
    }
}

const traffic = new TrafficLight();
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
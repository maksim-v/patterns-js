/*
    creates abstract shell around specific functionality which allow us to control
    it thru other object and save state

    Example: Redux
 */

class MyMath {
    constructor(initialValue = 0) {
        this.number = initialValue;
    }

    square() {
        return this.number ** 2;
    }

    cube() {
        return this.number ** 3;
    }
}

class Command {
    constructor(subject) {
        this.subject = subject;
        this.commandsExecuted = [];
    }

    execute(command) {
        this.commandsExecuted.push(command);

        return this.subject[command]();
    }
}

const x = new Command(new MyMath(2));

console.log(x.execute('square'));
console.log(x.execute('cube'));
console.log(x.commandsExecuted);
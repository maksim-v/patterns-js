/*
    allow us consistently receive access to specific info
 */

class MyIterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                }

                this.index = 0;
                return {
                    done: true,
                    value: void 0,
                };
            }
        }
    }
}

// realization via generators
function* generator(collection) {
    let index = 0;

    while(index < collection.length) {
        yield collection[index++];
    }
}

const iterator = new MyIterator(['this', 'is', 'iterator']);

for(const val of iterator) {
    console.log('Value: ', val);
}

const generatorIterator = generator(['this', 'is', 'iterator']);

console.log('Value: ', generatorIterator.next().value);
console.log('Value: ', generatorIterator.next().value);
console.log('Value: ', generatorIterator.next().value);
class Car {
    constructor(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price;
    }

    break() {
        console.log('slowing down...')
    }

    toString() {
        return `Car is from ${this.make} of model ${this.model} with price tag ${this.price} `
    }
}


class SportsCar extends Car {
    constructor(make, model, price, speed) {
        super();
        this.speed = speed;
    }
}

let bmw = new SportsCar('BMW', 'X6', 20000, 300);
console.log(bmw.break());
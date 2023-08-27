//Một chiếc xe gồm có 3 bộ phận
"use strict";
class Car {
    constructor(engine, chassis, body) {
        this.engine = engine;
        this.chassis = chassis;
        this.body = body;
    }

    toString() {
        return JSON.stringify(this)
    }
}

class CarBuilder {
    addChassis(chassis) {
        this.chassis = chassis;
        return this;
    }
    addEngine(engine) {
        this.engine = engine;
        return this;
    }
    addBody(body) {
        this.body = body;
        return this;
    }
    build() {
        return new Car(this.engine, this.chassis, this.body);
    }
}

const car = new CarBuilder()
    .addEngine('v12')
    .addBody('KIA SOLUTO')
    .addChassis('LUXURY')
    .build();

const car1 = new CarBuilder().addEngine('v10')
    .addBody('KIA SOLUTO LUXURY').build();


console.log('kakaka Car', car.toString())
console.log('kakaka Car1', car1.toString())
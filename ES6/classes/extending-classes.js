class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }
    drink() {
        this.thirst += 10;
        return this.thirst;
    }
    eat(food) {
        this.belly.push(food);
        return this.belly;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(`Bark Bark! I am ${this.name} is a ${this.breed}`);
    }
}
const rhnio = new Animal('Rhiney');
const snickers = new Dog("snicky", 'king Charles')
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    bark() {
        console.log(`Bark Bark! my name is ${this.name}`)
    }
    cuddle() {
        console.log(`I love you owner!`);
    }
    static info() {
        console.log('A Dog is better than a cat by 10 times');
    }
    get description() {
        return `${this.name} is a ${this.breed} type of dog`;
    }
    set nickname(value) {
        this.nick = value;
    }
    get nickname() {
        return this.nick;
    }
}
const snickers = new Dog('Snickers', "King Charles");
const Sunny = new Dog('Sunny', 'Golden Doodele');

console.log(snickers.bark());
console.log(snickers.nickname = 'snicky');
console.log(snickers.nickname);
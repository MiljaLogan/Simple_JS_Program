const first = 'snickers';
const last = 'bos';
const age = 2
const breed = 'King Charles Cav';
const dog = {
    firstName: first,
    last,
    age,
    breed,
    pals: ['Hugo', 'Sunny']
};
console.log(dog);

const model = {
    create(selector) {

    },
    open(content) {

    },
    close(goodbye) {

    }
}

function invertColor(color) {
    return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1), 16)).toString(16)).slice(-6);
}

const key = 'pocketColor';
const value = "#ffc600";

const tShirt = {
    [key]: value,
    [`${key} Opposite`]: invertColor(value)
};

console.log(tShirt);

const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 100];

const shirt = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift()
}

console.log(shirt);

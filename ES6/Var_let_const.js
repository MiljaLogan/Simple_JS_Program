const person = {
    name: 'milja',
    age: 28
}
console.log(person);
person.age = 74;
console.log(person);

const mil = Object.freeze(person);
mil.age = 67;
console.log(mil);

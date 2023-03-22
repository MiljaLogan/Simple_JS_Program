const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', "Jobs"];
inventors.push(...newInventors);
console.log(inventors);

const details = ["Milja", 'Augustine', 34];
function sayHi(first, last, age) {
    console.log(`Hey there ${first} ${last} age ${age}`);
}

sayHi(...details);
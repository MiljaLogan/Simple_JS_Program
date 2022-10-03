const names = ['Milja', 'Aneena', 'Jostin'];
console.log(names);
const fullName = names.map(function (name) {
    return `${name} Augustine`
});
console.log(fullName);

const fullName2 = names.map((names) => {
    return `${names} Augustine`;
});
console.log(fullName2);

const fullName3 = names.map(names => {
    return `${names} Augustine`;
});
console.log(fullName3);

const fullName4 = names.map(names => `${names} Augustine`);
console.log(fullName4);

const fullName5 = names.map(() => `cool bos`);
console.log(fullName5);

function sayMyName(name) {
    console.log(`Hello ${name}`);
}
sayMyName('Milja');

const sayMyName2 = (name) => { console.log(`Hello ${name}`) };
sayMyName2('Aneena');

//


function* listPeople() {
    let i = 0;
    yield i;
    i++;
    yield i;
    i++;
    yield i;
}
const people = listPeople();

function* listPeopleName() {
    yield "Logan";
    yield "Milja";

    yield "Paari";

    yield "Pegan";
}
const peopleName = listPeopleName();

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
];

function* loop(arr) {
    console.log(inventors);
    for (const item of arr) {
        yield item;
    }
}

const inventorGen = loop(inventors);
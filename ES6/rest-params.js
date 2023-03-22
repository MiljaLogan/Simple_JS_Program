function covertCurrency(rate, tax, tip, ...amount) {
    console.log(rate, tax, tip, amount);
    return amount.map(amounts => amounts * rate);
}

const amount = covertCurrency(1.54, 10, 23, 52, 1, 56);
console.log(amount);


const runner = ['Milja Else', 123, 5.5, 5, 3, 6, 35];
const [name, id, ...km] = runner;
console.log(name, id, km);

const team = ['Milja ', 'Else', 'Augustine', 'Paari', 'Pegan'];
const [captain, assistant, ...player] = team;
console.log(captain, assistant, player);


const race = "100m Dash";
const Winners = ["Logan", "Paari", "Pegan"];

//property and varibale is same then use one race
const win = Winners.map((winner, i) => ({ name: winner, race, place: i + 1 }));
console.table(win);

const ages = [20, 50, 54, 65, 78, 123, 63]
const old = ages.filter(age => age >= 60);
console.log(old);
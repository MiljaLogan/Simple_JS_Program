const race = "100m Dash";
const Winners = ["Logan", "Paari", "Pegan"];

//property and varibale is same then use one race
const win = Winners.map((winner, i) => ({ name: winner, race, place: i + 1 }));
console.table(win); 
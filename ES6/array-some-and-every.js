const ages = [32, 34, 13, 12, 18, 20]

// 👵👨 is there at least one adult in the group?
const adultPresent = ages.some(ages => ages >= 18);
console.log(adultPresent);

// 🍻 is everyone old enough to drink?
const allOldEnough = ages.every(ages => ages >= 18);
console.log(allOldEnough);
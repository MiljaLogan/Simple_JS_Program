function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}
Dog.prototype.bark = function () {
  console.log(`Bark Bark! My name is ${this.name}`)
}

const snickers = new Dog('Snickers', "King Charles");
const Sunny = new Dog('Sunny', 'Golden Doodele');

Dog.prototype.bark = function () {
  console.log(`Bark Bark! zc My name is ${this.name} and I'am a ${this.breed}`);
}

Dog.prototype.cuddle = function () {
  console.log(`I love you owner`);
}
console.log(snickers.cuddle());
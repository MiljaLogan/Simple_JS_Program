const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const speciality = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg', ...speciality];
//const fridayPizzas = pizzas;
const fridayPizzas = [...pizzas];
console.log(pizzas);
console.log(fridayPizzas);
fridayPizzas[0] = "Canada Pie"
console.log(pizzas);
console.log(fridayPizzas);


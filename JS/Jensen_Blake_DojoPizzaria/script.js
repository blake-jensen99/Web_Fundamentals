
function pizzaOven(curstType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.curstType = curstType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1)

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "fetta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("thin crust", "BBQ", ["mozzarella", "cheddar"], ["chicken", "bacon"]);
console.log(p3)

var p4 = pizzaOven("stuffed crust", "traditional", ["mozzarella"], ["pepperoni", "sausage", "bacon", "hamburger", "ham"]);
console.log(p4)


function randomPizza(curstType, sauceType, cheese, toppings){
    var crust = Math.floor(Math.random() * curstType.length);
    var sauce = Math.floor(Math.random() * sauceType.length);
    var cheeseInd = Math.floor(Math.random() * cheese.length);
    var toppingsInd = Math.floor(Math.random() * toppings.length);
    var pizza = {};
    pizza.curstType = curstType[crust];
    pizza.sauceType = sauceType[sauce];
    pizza.cheese = cheese[cheeseInd];
    pizza.toppings = toppings[toppingsInd];
    return pizza;
}

var pRandom = randomPizza(["stuffed crust", "thin crust", "deep dish", "hand tossed"], ["traditional", "marinara", "BBQ", "alfredo"], ["mozzerella", "cheddar", "fetta"], ["pepperoni", "sausage", "bacon", "hamburger", "ham", "mushrooms", "olives", "onions"]);
console.log(pRandom)
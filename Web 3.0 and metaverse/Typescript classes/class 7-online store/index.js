"use strict";
function calculateTotal(cart) {
    let total = 0;
    for (var i = 0; i < cart.products.length; i++)
        total += cart.products[i].price;
    return total;
}
let p1 = {
    id: 1,
    name: "joggers",
    price: 1000,
    category: "shoes"
};
let p2 = {
    id: 2,
    name: "slippers",
    price: 2000,
    category: "shoes"
};
let cart = {
    products: [p1, p2]
};
console.log(calculateTotal(cart));

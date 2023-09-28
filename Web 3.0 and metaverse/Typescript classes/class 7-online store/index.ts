interface Product {
    id: number,
    name: string,
    price : number,
    category: string
}

type Cart = {
    products : Product[]
}

interface Customer {
    id: number,
    name : string,
    email: string
}

type Order = {
    customer : Customer,
    cart : Cart
}

function calculateTotal (cart : Cart){
    let total = 0;
    for(var i = 0; i<cart.products.length ; i++)
        total += cart.products[i].price;
    return total;
}

let p1 : Product = {
    id: 1,
    name: "joggers",
    price : 1000,
    category: "shoes"   
}
let p2 : Product = {
    id: 2,
    name: "slippers",
    price : 2000,
    category: "shoes"   
}

let cart: Cart = {
    products : [p1,p2]    
}

console.log(calculateTotal(cart));

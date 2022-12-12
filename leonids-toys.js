const toys = [
{
    id: 1,
    origin: "China",
    minimumAge: 10,
    onSale: false,
    price: 40.99,
    manufacturer: "Cheese Toys",
    inStock: 3948,
    name: "Zoomer"
},

 {
    id: 2,
    origin: "China",
    minimumAge: 6,
    onSale: true,
    price: 19.99,
    manufacturer: "Bacon Toys",
    inStock: 3453,
    name: "Flyer"
},

{
    id: 3,
    origin: "China",
    minimumAge: 12,
    onSale: false,
    price: 9.99,
    manufacturer: "Huwei",
    inStock: 1314,
    name: "Texter"
}
]

/*for (const toy of toys) {
    console.log(toy.price);
}*/

const frisbee = {
    id: 4,
    origin: "China",
    minimumAge: 5,
    onSale: true,
    price: 12.99,
    manufacturer: "Your Mom",
    inStock: 2323,
    name: "Flying Circle"
}

const brick = {
    id: 5,
    origin: "Kansas",
    minimumAge: 18,
    onSale: false,
    price: 99.99,
    manufacturer: "Apple",
    inStock: 1,
    name: "Brock the Brick"
}

toys.push(frisbee, brick);

const toyToFind = 1;

for (const toy of toys) {
    if (toy.id === toyToFind){
    console.log(`The ${toy.name} toy is priced at $${toy.price * 1.05} and is maufactured by ${toy.manufacturer}.`)}
}
 
const products = [
    {id : '1', name: 'laptop', price: 52000, brand:'len', color:'black'},
    {id : '2' ,name: 'phone', price: 2000, brand:'HTC', color:'silver'},
    {id : '3' ,name: 'watch', price: 3220, brand:'casio', color:'golden'},
    {id : '4' ,name: 'sunglass', price: 4200, brand:'ray', color:'yellow'},
    {id : '5' ,name: 'camera', price: 1688, brand:'canon', color:'red'},
]

// ------------map------------
const brands = products.map(product => product.brand)
// console.log(brands);
const prices = products.map(product => product.price)
// console.log(prices);

// --------------forEach

// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))
// products.forEach(product => console.log(product.name))

// --------------- filter
const cheap = products.filter(product => product.price <= 4000)
// console.log(cheap);
const specialOne = products.filter(product => product.id == 5)
console.log(specialOne);


const specificProducts = products.filter(product => product.name.includes('n'))
// console.log(specificProducts);


// find
const special = products.find(product => product.name.includes('n'))
console.log(special);

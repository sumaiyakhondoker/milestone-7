const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
const studentJson = JSON.stringify(student)
// console.log(student);
// console.log(studentJson);

const studentObj = JSON.parse(studentJson)
// console.log(studentObj )

// fetch
// fetch('url')
// .then(res => res.json())
// .then(data=> console.log(data))

// const func = async ()=>{
//     const res = await fetch('url')
//     const data = await res.json()
//     console.log(data);
// }

// keys, values
const keys = Object.keys(student)
// console.log(keys);

const values = Object.values(student)
// console.log(values);


// array --> forEach, map
const numbers = [52,45,32,12,85,65,74]
// numbers.forEach(num=> console.log(num))

const result = numbers.map(num=> num*2)
// console.log(result);

// add new element to an array
const products = [
    {name: 'laptop', price: 52000, brand:'len', color:'black'},
    {name: 'phone', price: 2000, brand:'HTC', color:'silver'},
    {name: 'watch', price: 3220, brand:'casio', color:'golden'},
    {name: 'sunglass', price: 4200, brand:'ray', color:'yellow'},
    {name: 'camera', price: 1688, brand:'canon', color:'red'},
]

const newProduct = {name: 'pc', price: 12000,brand:'hp', color:'silver'}
const newProducts = [...products, newProduct];
// console.log(newProducts);

products.push({name: 'mouse',brand: 'A4 tech', price:450})
// console.log(products);


//   remove element  from an array
const products2 = [
    {name: 'laptop', price: 52000, brand:'len', color:'black'},
    {name: 'phone', price: 2000, brand:'HTC', color:'silver'},
    {name: 'watch', price: 3220, brand:'casio', color:'golden'},
    {name: 'sunglass', price: 4200, brand:'ray', color:'yellow'},
    {name: 'camera', price: 1688, brand:'canon', color:'red'},
]

const currentProducts = products2.filter(p => p.name !== 'phone')
console.log(currentProducts);




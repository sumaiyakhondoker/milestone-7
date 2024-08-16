const numbers = [45,23,12,63];
const nayok = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
// template string
const about = `Actor name is ${nayok.name} and his age is ${nayok.age} and a number of numbers array is ${numbers[3]} and also has movies ${nayok.movies[1]}`
// console.log(about);

// arrow function
const normal = ()=> 55;
console.log(normal());

const multiply = x => x + 10
console.log(multiply(3));

const add = (a,b)=> a+b;
console.log(add(4,9));

const multiple = (a,b,c)=>{
    const sum = a+b;
    const result = sum * c
    return result
}

console.log(multiple(4,2,3));

// spread operator 
const newNumbers = [...numbers];


// create a new array from an older array and add an element
const currentNumbers = [...numbers, 48,96,78]
numbers.push(45,25)

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
const fatherName = 'Arnold'
let season = 'rainy'
season = 'winter'
if(fatherName === 'arnold' || season === 'winter'){
    console.log('inside if condition');
}
else if(fatherName === 'Arnold'){
    console.log('inside else if');
}
else{
    console.log('inside else');
}


// array
const numbers = [45,23,12,63];
console.log(numbers.length);
numbers.push(86)
numbers.pop()
console.log(numbers);

numbers[1] = 85
console.log(numbers);

// for, while loop
// for(let i = 0; i< numbers.length;i++){
//     let number = numbers[i]
//     console.log(number);
// }

let i = 0;
while(i<numbers.length){
    let number = numbers[i]
    console.log(number);
    i++;
}

// function 
function multiply(num1, num2){
    const result = num1*num2
    return result
}

const result = multiply(45,25);
console.log(result);

// object 
const nayok = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

console.log(nayok.age);
console.log(nayok['name']);
const myVar = 'name'
console.log(nayok[myVar]);
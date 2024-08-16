const returnNine = ()=>{
    return 9;
}

const result = returnNine()
console.log(result);

const multiply=(num)=>{
    return num *12;
}

const result2 = multiply(3)
console.log(result2);


const sum = (num1, num2)=>{
    const sum = num1+num2;
    const result = sum /4;
    return result
}

const result3 = sum(4,12);
console.log(result3);


const multiple= (num1, num2)=>{
    const sum1 = num1+5
    const sum2 = num2+5

    const multiply = sum1 * sum2;
    return multiply;

}

console.log(multiple(6,12));

const nayok = {
    name: 'sarukh khan',
    age: 45,
    home: 'india'
}
const {age,home} = nayok
console.log(age,home);

const [,balance,] = [42,100,85,32,12]
console.log(balance);


const defaultParameter = (num1=2, num2 = 5)=>{
    console.log(num1 + num2);
}

defaultParameter()
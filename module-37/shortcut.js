// truthy --->true, any number(+ve, -ve without 0), any string"djhfjd",{},[],other things without falsy values 
// checking truthy
let myVar = 0;
if(myVar){
    myVar = myVar*100;
    console.log(myVar);
}
else{
    myVar = 'negative'
    // console.log(myVar);
}

// falsy --->false, '', 0, null, undefined, NaN
// checking falsy
const value = ''
if(!value){
    // console.log("it's a falsy value");
}
else{
    console.log("it's a truthy value");
}

// using if else
const myMoney = 800;
let food;
if(myMoney > 100){
    food = 'biryani'
}else{
    food = 'cha biscuit'
}
// console.log(food);

// ternary 
let food1 = myMoney > 120 ? 'biryani': 'cha biscuit'
// console.log(food1);

let drink = (myMoney >100 && myVar >100) ?'coke':'minarel water'
// console.log(drink);
let drink2 = (myMoney >100 || myVar >100) ?'coke':'minarel water'
// console.log(drink2);


// ----------shortcut
// number to string conversion
const num = 78;
// console.log(num);
const numStr = num + ''
// console.log(numStr);

// string to number conversion shortcut
const input = '560'
const number = +input
// console.log(number);

// let isActive = true;
let isActive = false;
const showUser = ()=>console.log('display user')
const hideUser = ()=>console.log('hide user')

// isActive ? showUser() : hideUser()

// shortcut

isActive && showUser()
isActive || showUser()



 isActive = !isActive
//  console.log(isActive);



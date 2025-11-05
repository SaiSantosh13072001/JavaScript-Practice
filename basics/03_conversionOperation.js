let score = "33aba"

// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN it's a special case will conversion a number with string "33aba" like this 
                            // result as NaN but it's `typeof` is number

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1; false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

let someNumber = 33;

let someString = String(someNumber);

console.log(someString);
console.log(typeof someString);


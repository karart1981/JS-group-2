"use strict";
//destructuring
// տնային օր 1 / destucturing / array
const genresOfFilms = ["action", "documentary", "comedy", "horror", "romance", "thriller", "crime", "drama"];

const [act, doc, com, hor, rom, thril, crim , dram] = genresOfFilms;

console.log(`I love films of ${act}, ${doc}, ${com}, ${crim}, ${dram}.`);


// օր 2 / array
const userProfile = {
   name: "Armine",
   lastName: "Phogkosyan",
   age: 17,
   preferences: ["sport", "reading", "movie"]
};
const [sport, read, movie] = userProfile.preferences;

console.log(`${userProfile.name} have some preferences - ${sport}, ${read}, watching ${movie}s.`);


// օր 3 / array
const arr = [14, 52, -5, 87, 63, [4, 62, 52], 74];
const [a, b, c, d, e, f, g] = arr;
console.log(a, b, c, d, e, f, g);

// օր 4 / array
const newArr = [5, 78, 65, 4];
const [q,w,t,p] = newArr;
const i = q;
console.log(i,w,t,p);

// օր 5 / array
const names = ["Astgkik", "Mila", "Lucy", "Karine"];
const [ast, mil, luc, kar] = names;
let mer = ast;
mer = "Mery";
console.log(mer, mil, luc, kar);
console.log(ast, mil, luc, kar);

// օր 6 / array
const lastName = ["Simonyan", "Martirosyan", "Pogkosyan", [[[[["Karapetyan"]]]]]];
const [sim,mar,pogk,kar] = lastName;
console.log(`Hello ${kar}`);

// օր 7 / array / 6-ի օրինակը loop-ով
for(let i = 0; i < lastName.length; i++){
	console.log(`Your lastName is ${kar}.`);
	break;
}

// օր 8 / array 
const num = [1, 2];

const [num1, num2, ...rest] = [1, 2, 3, 4, 5];

console.log(rest); 

// օր 9 / array
const sumNum = [54, 52, 41];
const [sum1, sum2,sum3, sum4=5, sum5=87] = sumNum;
console.log(sum5);

// օր 10 / array








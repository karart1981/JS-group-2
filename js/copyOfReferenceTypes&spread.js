"use strict";

// copy primitive types 
/* եթե name-ը ջնջենք copyName նույնպես կջնջվի */
let name = "Arevik";
let copyName = name;
name = "Lucy";
console.log(name);
console.log(copyName);


// copy reference types / Object / version 1
//copy-ն ճյուղավորված չի կամ մակերեսային է


const obj = {
  a: "A",
  b: "B",
  c: "C"
};

function copy (mainObject){
 const mainObjCopy = {};
 for(let key in mainObject){
	mainObjCopy[key] = mainObject[key];
 }
 return mainObjCopy;
}

const copyObj = copy(obj);
obj.a = "D";
obj.b = "E";
obj.c = "F";
console.log(obj);
console.log(copyObj);


// object-ների միավորում
const obj1 = {
	a: 40,
	b: 50,
};
const obj2 = {
    c: 60,
	d: 70
};
const together = Object.assign(obj1, obj2);
console.log(together); // երկու օբյեկտները միացրեցինք


// copy reference types / Object / version 2

const numb = {
  num1: 415,
  num2: 200,
  num3: 650
};
const copyNumb = Object.assign({}, numb);
numb.num1 = 4;
numb.num2 = 5;
numb.num3 = 6;
console.log(copyNumb);
console.log(numb);



// copy reference types / Object / version 3 / spread operator
const some = {
	one: 1,
	two: 2
};
const copySome = {...some};
some.one = 45;
some.two = 87;
console.log(some);
console.log(copySome);



// copy reference types / array / version 1
const letter = ["A", "B", "C"];

function copyArray(mainArr){
 const arr = [];
 for(let i in mainArr){
	arr[i] = mainArr[i];
 }
 return arr;
}
const copyLetter = copyArray(letter);
letter[0] = "D";
letter[1] = "E";
letter[2] = "F";
console.log(letter);
console.log(copyLetter);


// copy reference types / array / version 2
const numArr = [54, 25, 85, 78];
const copyNumArr = Object.assign([],numArr);

numArr[0] = 1;
numArr[1] = 2;
numArr[2] = 3;
numArr[3] = 4;
console.log(numArr);
console.log(copyNumArr);


// copy reference types / array / version 3
const anyArr = [4, 45, 46, 48];
const copyAny = anyArr.slice();

anyArr[0] = 654;
anyArr[1] = 454;
anyArr[2] = 0;
anyArr[3] = 4;
console.log(anyArr);
console.log(copyAny);


// copy reference types / array / version 4 / spread operator / version 1
const name = ["Armen", "Ashot", "Karen"];
const name2 = ["Armine", "Lucy", "Arevik"];
const name3 = ["Marine", ...name, ...name2];
console.log(name3);



// copy reference types / array / version 5 / spread operator / version 2
// մակերեսային copy
const oldArr = [1, 2, 3];
const newArr = [...oldArr];
oldArr[0] = 52;
oldArr[1] = 25;
oldArr[2] = 41;
console.log(oldArr);
console.log(newArr);


// reference types / function / version 1 / spread operator
// spread operator-ը մեզ վերադարձնում է զանգված

function test(...argums){  // or params
	console.log(argums);
	
}

test("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K");


//deep clone version
const names = { 
	name: "Lucy", 
	name2: "Arevik"
};
const cloneName = JSON.parse(JSON.stringify(names));

names.name = "Nazli";
names.name3 = "Lucy";
console.log(names);
console.log(cloneName);









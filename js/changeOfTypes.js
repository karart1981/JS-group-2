"use strict";
// 1 version to String
// from number to String
console.log(typeof (String(5))); // string
console.log(String(5) + 4);  // 54
console.log(String(5)*4);  // 20
console.log(typeof ("5" * 4));  // number

// from boolean to string
console.log(typeof (String(true)));  // string
console.log(String(true));  // "true"


// from null & undefined to string
console.log(typeof (undefined)); // undefined
console.log(typeof (String(undefined))); // string
console.log(typeof (null)); // object
console.log(typeof (String(null))); // string


// from array to string
console.log(typeof ([]));  // object
console.log(typeof (String([])));  // string
console.log(String([]));  // ոչ մի բան


// from object to string
console.log(typeof ({}));  // object
console.log(typeof (String({})));  // string
console.log(String({})); // [object, object]


// from function to string
console.log(typeof (String(function(){}())));  //string
console.log(String(function(n){return n;}(5)));  // "5"


// 2 version to String
console.log(typeof (5 + ""));  // string / "5"
console.log(typeof ([]+""));  // string / ոչ մի բան
console.log(typeof (null + "")); // string / "null"


// 3 version to string
const a = 50;
console.log(typeof(a.toString()));  // string / "50"

const someArr = [5, 4, 78];
console.log(typeof (someArr.toString()));  // string / "5, 4, 78" 
/* նույնա ոնց որ console.log(someArr.join(", "))*/


const someObj = {a: 15, b: 25};
console.log(typeof(someObj.toString()));  // string / [object, object]


// from any types to Number

// 1 version to number
console.log(typeof(Number("Hello")));  // number / NaN
console.log(typeof(Number(false)));  // number / 0
console.log(typeof(Number([])));  // number / 0
console.log(typeof(Number([1, 2, 3])));  // number / NaN
console.log(typeof(Number([15])));  // number / 15
console.log(typeof(Number({})));  // number / NaN
console.log(typeof(Number(null)));  // number / 0
console.log(typeof(Number(undefined)));  // number / NaN
console.log(typeof(Number(" ")));  // number / 0
console.log(typeof(Number(function(){return 15;}())));  // number / 15
console.log(typeof(Number(function(a){return a;}())));  // number / NaN


// 2 version to number
console.log(typeof(+"15"));  // number / 15
console.log(typeof(+"abc"));  // number / NaN
console.log(typeof(+"true")); // number / NaN
console.log(typeof(+true)); // number / 1
console.log(+true + +true + 15); // 17
console.log(+true / +false); // Infinity



// 3 version to number
console.log(typeof parseInt("15.5px"));  // number / 15
console.log(typeof parseFloat("15.5px")); // number / 15.5
console.log(typeof Math.ceil("15.5px"));  // number / NaN


// from all types to Boolean
// false => 0, NaN, undefined, false, null

// version 1 to boolean
let state = " ";
if(state){
	console.log("Server is working...");
}else{
	console.log(`${state} = false`);
} //true / փորձելու օրինակ, բայց state-ի typeof-ը boolean չի

let state = "";
if(state){
	console.log("Server is working...");
} else{
	console.log(`${state} = false.`);
} // false / փորձելու օրինակ


// 2 version
console.log(typeof(Boolean("hello"))); // boolean / true
console.log(typeof(Boolean([]))); // boolean / true
console.log(typeof(Boolean({}))); // boolean / true
console.log(typeof(Boolean(null))); // boolean / false


// 3 version
console.log(!15); //Boolean / false
console.log(!!50); // Boolean / true
console.log(!undefined); // Boolean / true
console.log(![]); // Boolean / false
console.log(!{}); // Boolean / false

// to BigInt
console.log(typeof 15); // number
console.log(typeof 15n); // BigInt

















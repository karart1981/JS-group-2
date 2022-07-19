"use strict";
/*1. Ստեղծում եք մի քանի ֆունկցիա, օբյեկտ, զանգված, ու պարապում եք
դեբագրով, պետք ա կոդը նենց ստեղծեք, որ սխալ լինի մեջը ու սխալը 
գտնեք դեբագեռով
2. ստեղծում եք spread operator-ի նման ֆունկցիա, որը կվերցնի 
զանգվածներ ու կսփրի ինչ-որ այլ զանգվածի մեջ */ 
//1
const someArr= [45,10,8];
console.log(someArr.join(", ",));
console.log(someArr);



const dArr = [4, 2, 5, 7];
function myDebugger(arr){
  for(let i =0;i <arr.length;i++){
	arr[i] = arr[i]*5+5- arr[i];
	
  }
  return arr;
}
console.log(myDebugger(dArr));



const obj = {
 name:"Lucy",
 lastName:"Pogkosyan",
 age:20,
 location:"Armenia"
};
for(let i of obj){
	console.log(obj[i]);
}



//2 / version 1
const myArr = [41, 25, 87, 4, 56, 23];
let Arr2 = [];
function mySpread(arr,copyArr){
  copyArr = arr.slice();
  return copyArr;
}
console.log(mySpread(myArr,Arr2));

// version 2
let x = [11, 13, 15, 17];
let y = [];

function mySpread_2(arr,copyArr){
	for(let i in arr){
		copyArr.push(arr[i]);
	}
	console.log(copyArr);
	
}
mySpread_2(x,y);

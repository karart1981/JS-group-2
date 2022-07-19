"use strict";
// homework about clouser
//1

function colcul(n){
	return function(){
       console.log(1000 * n);
	};
}
const c = colcul(25);
c();


//2
function n(num1){
	return function n1(num2){
       return num1 * num2;
	};
}
const fin = n(40);
console.log(fin(25));



 //3
 function anyNum(n){
	return function anyNum2(n1){
       return (n + n1) * n1 - n;
	};
 }
const A1 = anyNum(2);
const A2 = anyNum(4);
console.log(A1(5));
console.log(A2(5));

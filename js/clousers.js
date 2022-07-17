"use strict";
//closures - փակումներ - замыкание
/* Այն ֆունկցիա է,որը նաև իր հետ փաթեթավորված ունի հղումներ դեպի բոլոր դրսի 
փոփոխականները,որը իր մեջ օգտագործում է։
* առաջին հերթին ֆունկցիայի մեջ արգումենտ որպես ընտրվում է լոկալ փոփոխականը,եթե 
չկա նոր բարձրանում է վերև և փնտրում գլոբալի մեջ։ Բայց եթե մինչև ֆունկցիայի կանչելը
փոփոխականի արժեքը փոխում ենք,ապա ընդունում է այդ արժեքը։
* lexical invarmement - Լեքսիկական միջավայր՝ տեղական հիշողություն + նրա ծնողի 
բառային միջավայր
Java script-ը ավտոմատ ֆունկցիայի մեջ ստեղծում է lexical invarmement,որը ջնջվում է,
երբ ֆունկցիան դադարում է աշխատել։ Ամեն անգամ ֆունկցիան կանչելուց, նոր lexical 
invarmement է ստեղծվում։

*/

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

//4
let num = 7;

function f(num){
	console.log(num);
}
num = 9;
f(num);  //9


//5
let num1 = 7;

function f(num1){
	num1 = 4;
	console.log(num1);
}
num1 = 9;
f(num1); // 4


//6  lexical invarmement example
function startCounter(){
	let counter = 0;

	const count = function(){
		counter = counter + 1;
		return counter;
	};
	return count;
}
const increment = startCounter();
const a1 = increment();
const a2 = increment();
const a3 = increment();
console.log(a1,a2,a3);



//7
let c = 0;
function sc(){
	c++;
	return c;
}
console.log(sc());
console.log(sc());
console.log(sc());



  
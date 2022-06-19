
"use strict";

/*Տնային աշխատանք։ Ստեղծում եք Object, որը ունենում է մեթոդ, որի մեջ իրականացնում եք 
մաթեմատիկական գործողություն, ու արդյունքը տպում եք կանսոլում։ Մաթեմատիկական գործողությունը
 պետք է  բաղկացած լինի գոնե երկու օպերատորից (+, -, /, *) */

// տնային 1 օրինակ
let x = 2;
let y = 1;
let z = 3;
let d = 4;

const obj = {
	num(sum){
       console.log(sum);
	}
	
};
obj.num(x + (z - y) * d / x);


// տնային 2 օրինակ
let a=5, b=7, c=2, m=4; 
const homework = {
	myWork: function (result){
	   return result;
	}
	
};

console.log(homework.myWork(a * b + (c + m) * a % 3));


// տնային 3 օրինակ
function giveResult (a,b,c){
      return a * 2 + b / 5 + c * 8;
	  
	}
console.log(giveResult(5,10,3));

	

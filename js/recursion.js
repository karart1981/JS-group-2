"use strict";
//Ռեկուրսիան այն երևույթն է, երբ ֆունկցիան իր ներսում կանչում է ինքն իրեն։

// example 1 / recursion
/* console-ը տպում է 5 անգամ */
function f1(i){
  if(i <= 0){
	return;
  }
  console.log("Hi");
  return (f1(i-1));
}
f1(5);

// example 2 /recursion
/* Որպես արգումենտ նշված թիվը բազմապատկում ենք մինչև 1 ընկած թվերի հետ  */
function factorial(num){
  if(num<=1){
	return 1;
  }
   return num * factorial(num-1);
}
console.log(factorial(5));


// example 3 / recursion
/* Math.pow մեթոդի իմ տարբերակը, այսինքն առաջին արգումենտ նշված թիվը բազմապատկում 
ենք իր հետ երկրորդ արգումենտ նշված թվի չափով։ */
function pow(x, y){
	if(y === 0){
		return 1;
	}
	return x * pow(x,y-1);
}
console.log(pow(5,3));


// example 4 / recursion
/* Տպում ենք նշված թվից մինչև 0 ընկած թվերը*/
function printNumber(n){
  if(n < 0){
     return;
  }
  console.log(n);
  printNumber(n-1);
}
printNumber(100);

// example 5
const Start = 0;
const Finish = 2;
let result = "";
let count = null;
function recursia(start,finish){
    if(result.length === 0){
        count = start;
    }
    result += start + " ";
    if(start === finish){
        if(count < finish){
            count++;
            start = Start;
            result += "\n";
            recursia(start,finish);
        }
      return result;
    }
    return recursia(start+1, finish);
}
console.log(recursia(Start, Finish));
"use strict";

/*Ստեղծում եք 3 հատ  առանձին nested loop, որոնց մեջ պետք ա լինի 1, 2, և 3 հատ 
loop` ըստ հերթականության, ստեղծում եք FOR-ով և WHILE-ով */

let shift = [1,2,3];
let worker = ["work_1", "work_2", "work_3", "work_4", "work_5", "work_6"];
let day = ["day_1", "day_2", "day_3", "day_4", "day_5", "day_6"];
for(let g = 0; g < shift.length; g++){
	console.log(shift[g]);
	for(let l = 0; l< day.length; l++){
	for(let h = 0; h <=worker[2]; h++){
		console.log(worker[h]);
		break;
	}	
	for(let s = 0; s <=worker[4]; s++){
			console.log(worker[s]);
		break;
	}
	for(let r = 0; r <= worker[6]; r++){
		console.log(worker[s]);
	    break;
}
	}

}

// loop-ով ստեղծում ենք տոնածառ
let result = "";
for (let i = 1; i <= 7; i++) {
   for (let j = 7; j > i; j--) {
     result += " ";
  
 }
   for(let j = 0; j < i; j++){
        result +=" "+"*";
    }
 result += "\n";
}
console.log(result);

/*ստեղծում եք function, որի մեջ switch-ով պետք ա ստեղծեք կալկուլյատոր + - / * % ի
համար */
const calc = (x, y, operation)=>{

	switch (operation) {
		case "+": console.log(x + y); break;
		case "-":console.log(x - y); break;
		case "/":console.log(x / y); break;
		case "*":console.log(x * y); break;
	  default: console.log(x % y);
	}
};
	
	calc(1550, 5, "+");
	calc(240, 4, "-");
	calc(450, 9, "*");
	calc(60, 12, "/");
	calc(120, 2, "%");


	



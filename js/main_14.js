"use strict";

/*Ստեղծում եք 3 հատ  առանձին nested loop, որոնց մեջ պետք ա լինի 1, 2, և 3 հատ 
loop` ըստ հերթականության, ստեղծում եք FOR-ով և WHILE-ով */

let shift = ["1 հերթափոխ","2 հերթափոխ","3 հերթափոխ"];
let workerGroup1 = ["Արմեն", "Կարինե"];
let workerGroup2 = ["Մարտա", "Կարմեն"];
let workerGroup3 = ["Աշոտ", "Արսեն"];
let day = ["Երկուշաբթի", "Երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"];
for(let g = 0; g < shift.length; g++){
	console.log(shift[g]);
	for(let l = 0; l< day.length; l++){
	    for(let h = 0; h < workerGroup1.length; h++){
		     console.log(workerGroup1[h]);
		     break;
	    }	
	    for(let s = 0; s < workerGroup2.length; s++){
			 console.log(workerGroup2[s]);
		     break;
	    }
	    for(let r = 0; r < workerGroup3.length; r++){
		     console.log(workerGroup3[s]);
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

	switch (operation,"+") {
		case "+": console.log(x + y); break;
		case "-":console.log(x - y); break;
		case "/":
			if(y === 0){
				console.log("Թիվը չի բաժանվում 0-ի։");
			} else{
				console.log(x / y); break;
			}
		; break;
		case "*":console.log(x * y); break;
		case "-":console.log(x % y); break;
	  default: console.log("Այդպիսի գործողություն չկա");
	}
};
	
	calc(1550, 5, "+");
	calc(240, 4, "-");
	calc(450, 9, "*");
	calc(60, 12, "/");
	calc(120, 2, "%");


	



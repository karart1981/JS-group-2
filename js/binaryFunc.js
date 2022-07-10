"use strict";

/* binary օպերատորը գտնում է որոնվող թիվը միայն աճման կարգով դասավորված զանգվածի
էլէմենտների դեպքում։Դրա համար նախ սորտավորում ենք զանգվածը և հետո ման գալիս փնտրվող
էլեմենտը։ Հակառակ դեպքում կտա -1,այսինքն որոնվող թիվը չի գտնվել։ Այն աշխատում է 
հետևյալ սկզբունքով՝ զանգվածի length-ը բաժանում է 2 մասի,գտնում է կենտրոնը,սկզբից 
նայում է ձախ,եթե փնտրվող թիվը ձախում չէ,կտրում է ձախ մասը,հետո փնտրում է աջ մասում,
աջ մասն էլ բաժանում է 2 մասի,էլի փնտրում է ձախ մասում,և այսպես շարունակ, մինչև գտնի
փնտրվող էլեմենտը։ */

const arrStr = ["c", "b", "a"].sort();
const arrNum = [];

for (let i = 0; i <= 100; i++) {
	arrNum.push(i);
}

function ourBinaryFunc(searchItem, arr) {
	let index = 0,
	currenLength = arr.length,
	state;
	// let counter = 0;

	while (index < currenLength) {
		state = Math.floor((index + currenLength) / 2);
		// state = parseInt((index + currenLength) / 2);
		if (searchItem <= arr[state]) {
			currenLength = state;
			// counter++;
		} 
		
		// else if (searchItem === arr[state]) {
		// 	break;
		// } 
		
		else {
			index = state + 1;
		}
	}

	// console.log(counter);

	if (arr[index] === searchItem) {
		return index;
	} else {
		return -1;
	}
}

console.log(ourBinaryFunc("a", arrStr));

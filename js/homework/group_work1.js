/* 
	1. isOpen ֆունկցիան չի ցանկանում ճիշտ աշխատել,
	արդյունքը միշտ սխալ է ցույց տալիս, պետք է գտնել
	խնդիրը ու լուծել։
	2․ isAverageLunchPriceTrue ֆունկցիան պետք է 
	վերցնի ցանկացած երկու ուտելիքի գին մենյույի մեջից
	գումարի իրար հետ ու համեմատի averageLunchPriceի հետ
	3․ transferWaitors ֆունկցիան ստեղծվել է նրա համար, 
	որ կլոնավորի տվյալնների թեմփլեյթը ու ուղարկի այլ ռեստորանի,
	իհարկե այլ ռեստորանում պետք է լինեն ուրիշ ուտելիքներ, 
	ուրիշ գներ, ու ուրիշ մատուցողներ։ Ներկա պահին այս ֆունկցիան
	գտնվում է պատրաստման փուլում, դուք պետք է անեք այնպես, որ նոր ռեստորանում
	փոխվեն միայն մատուցողների անուններն ու տարիքները
	բայց ներկա պահին ծրագիրը աշխատացնելուց տեսնում ենք, որ ինքը 
	բավականին սխալ է աշխատում, նախ համ կլոնավորված ռեստորանն ա պարունակում
	նույն տվյալները, հետո էլ տեսնում ենք որ մատուցող Alice-ը կորում ա
	ու տեղը գալիս է ինչ-որ Mike, շտապ պետք է գտնել խնդիրը և ուղղել
	որպեսի ռեստորանները իրարից անկախ լինեն։
*/

const restorantData = {
	menu: [
		{
			name: "Salad Caesar",
			price: "14$"
		},
		{
			name: "Pizza Diavola",
			price: "9$"
		},
		{
			name: "Beefsteak",
			price: "17$"
		},
		{
			name: "Napoleon",
			price: "7$"
		}
	],
	waitors: [
		{
			name: "Alice",
			age: 22
		},
		{
			name: "John",
			age: 24
		}
	],
	averageLunchPrice: "20$",
	openNow: true
};
function isOpen(isOpen) {
	if (isOpen) {
		return ` Открыто ---- ${isAverageLunchPriceTrue(
			restorantData.menu[0],
			restorantData.menu[1],
			restorantData.averageLunchPrice
		)}`;
	} else {
		return `Закрыто`;
	}
}
console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
	if (
		+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
		+average.slice(0, -1)
	) {
		return "Цена ниже средней";
	} else {
		return "Цена выше средней";
	}
}
// recursion deep clone
function cloneObject(obj) {
	let clone = {};
	for (let i in obj) {
		if (typeof obj[i] == "object" && obj[i] != null) {
			clone[i] = cloneObject(obj[i]);
		} else {
			clone[i] = obj[i];
		}
	}
	return clone;
}
let cloneObj = cloneObject(restorantData);
cloneObj.waitors[0] = {
	name: "Mike",
	age: 32
};
console.log(cloneObj);
console.log(restorantData);









